import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { authInterceptor } from './auth-interceptor';
import { AuthService } from '../services/auth-service';
import { NGXLogger } from 'ngx-logger';
import { Mock, vi } from 'vitest';
import { firstValueFrom, of } from 'rxjs';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let mockAuthService: { getToken: Mock; logout: Mock; isTokenExpiringSoon: Mock; renewToken: Mock };
  let mockRouter: { navigate: Mock };
  let mockLogger: { trace: Mock; debug: Mock; info: Mock; warn: Mock; error: Mock; fatal: Mock };

  beforeEach(() => {
    mockAuthService = {
      getToken: vi.fn(),
      logout: vi.fn(),
      isTokenExpiringSoon: vi.fn().mockReturnValue(false),
      renewToken: vi.fn().mockReturnValue(of('renewed-token'))
    };

    mockRouter = {
      navigate: vi.fn()
    };

    mockLogger = {
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: NGXLogger, useValue: mockLogger }
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should NOT add Authorization header if token is missing', () => {
    mockAuthService.getToken.mockReturnValue(null);

    http.get('/api/data').subscribe();

    const req = httpMock.expectOne('/api/data');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });

  it('should add Authorization header if token exists', () => {
    mockAuthService.getToken.mockReturnValue('fake-token');

    http.get('/api/data').subscribe();

    const req = httpMock.expectOne('/api/data');
    expect(req.request.headers.has('Authorization')).toBe(true);
    expect(req.request.headers.get('Authorization')).toBe('Bearer fake-token');
    req.flush({});
  });

  it('should logout and redirect to login on 401 (Unauthorized) error', async () => {
    mockAuthService.getToken.mockReturnValue('expired-token');

    const requestPromise = firstValueFrom(http.get('/api/data'));

    const req = httpMock.expectOne('/api/data');
    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });

    await expect(requestPromise).rejects.toMatchObject({ status: 401 } as HttpErrorResponse);
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should logout and redirect to login on 403 (Forbidden) error', async () => {
    mockAuthService.getToken.mockReturnValue('invalid-token');

    const requestPromise = firstValueFrom(http.get('/api/data'));

    const req = httpMock.expectOne('/api/data');
    req.flush('Forbidden', { status: 403, statusText: 'Forbidden' });

    await expect(requestPromise).rejects.toMatchObject({ status: 403 } as HttpErrorResponse);
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should NOT logout on regular error (e.g., 500)', async () => {
    mockAuthService.getToken.mockReturnValue('valid-token');

    const requestPromise = firstValueFrom(http.get('/api/data'));

    const req = httpMock.expectOne('/api/data');
    req.flush('Server Error', { status: 500, statusText: 'Server Error' });

    await expect(requestPromise).rejects.toMatchObject({ status: 500 } as HttpErrorResponse);
    expect(mockAuthService.logout).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should renew token before forwarding request when token is expiring soon', () => {
    mockAuthService.isTokenExpiringSoon.mockReturnValue(true);
    mockAuthService.renewToken.mockReturnValue(of('new-token'));

    http.get('/api/data').subscribe();

    expect(mockAuthService.renewToken).toHaveBeenCalled();
    const req = httpMock.expectOne('/api/data');
    expect(req.request.headers.get('Authorization')).toBe('Bearer new-token');
    req.flush({});
  });

  it('should pass through auth endpoints without token renewal checks', () => {
    mockAuthService.getToken.mockReturnValue('existing-token');

    http.post('/token/renew', {}).subscribe();

    const req = httpMock.expectOne('/token/renew');
    expect(req.request.headers.get('Authorization')).toBe('Bearer existing-token');
    expect(mockAuthService.isTokenExpiringSoon).not.toHaveBeenCalled();
    req.flush({});
  });
});
