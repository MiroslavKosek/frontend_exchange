import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { authInterceptor } from './auth-interceptor'; // Upravte cestu k vašemu souboru
import { AuthService } from '../services/auth-service';
import { Mock, vi } from 'vitest';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let mockAuthService: { getToken: Mock; logout: Mock };
  let mockRouter: { navigate: Mock };

  beforeEach(() => {
    mockAuthService = {
      getToken: vi.fn(),
      logout: vi.fn()
    };

    mockRouter = {
      navigate: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
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

  it('should logout and redirect to login on 401 (Unauthorized) error', () => {
    mockAuthService.getToken.mockReturnValue('expired-token');

    http.get('/api/data').subscribe({
      error: (err) => expect(err.status).toBe(401)
    });

    const req = httpMock.expectOne('/api/data');

    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });

    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should logout and redirect to login on 403 (Forbidden) error', () => {
    mockAuthService.getToken.mockReturnValue('invalid-token');

    http.get('/api/data').subscribe({
      error: (err) => expect(err.status).toBe(403)
    });

    const req = httpMock.expectOne('/api/data');
    req.flush('Forbidden', { status: 403, statusText: 'Forbidden' });

    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should NOT logout on regular error (e.g., 500)', () => {
    mockAuthService.getToken.mockReturnValue('valid-token');

    http.get('/api/data').subscribe({
      error: (err) => expect(err.status).toBe(500)
    });

    const req = httpMock.expectOne('/api/data');
    req.flush('Server Error', { status: 500, statusText: 'Server Error' });

    expect(mockAuthService.logout).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
