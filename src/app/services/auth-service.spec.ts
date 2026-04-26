import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { vi } from 'vitest';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  
  // A valid mock JWT token where the payload 'sub' is 'testadmin'
  // Header: {"alg":"HS256","typ":"JWT"}
  // Payload: {"sub":"testadmin","exp":1700000000}
  const mockValidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0YWRtaW4iLCJleHAiOjE3MDAwMDAwMDB9.signature';

  function createTokenWithPayload(payload: Record<string, unknown>): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify(payload));
    return `${header}.${body}.signature`;
  }

  function createTokenExpiringIn(minutes: number): string {
    const exp = Math.floor(Date.now() / 1000) + (minutes * 60);
    return createTokenWithPayload({ sub: 'testadmin', exp });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AuthService
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login, store token, and return response', () => {
    const mockResponse = { access_token: mockValidToken, token_type: 'bearer' };
    const username = 'testuser';
    const password = 'password123';

    service.login(username, password).subscribe(res => {
      expect(res).toEqual(mockResponse);
      expect(localStorage.getItem('exchange_jwt_token')).toBe(mockValidToken);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/token`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/x-www-form-urlencoded');
    
    expect(req.request.body).toContain('username=testuser');
    expect(req.request.body).toContain('password=password123');
    
    req.flush(mockResponse);
  });

  it('should clear token on logout', () => {
    localStorage.setItem('exchange_jwt_token', 'some-token');

    service.logout();

    const req = httpMock.expectOne(`${environment.apiUrl}/logout`);
    expect(req.request.method).toBe('POST');
    req.flush({});

    expect(localStorage.getItem('exchange_jwt_token')).toBeNull();
  });

  it('should return true for isLoggedIn if token exists', () => {
    localStorage.setItem('exchange_jwt_token', 'some-token');
    expect(service.isLoggedIn()).toBe(true);
  });

  it('should return false for isLoggedIn if token does not exist', () => {
    expect(service.isLoggedIn()).toBe(false);
  });

  it('should extract username from a valid token', () => {
    localStorage.setItem('exchange_jwt_token', mockValidToken);
    const username = service.getUsernameFromToken();
    expect(username).toBe('testadmin');
  });

  it('should return "User" as fallback if token is missing', () => {
    const username = service.getUsernameFromToken();
    expect(username).toBe('User');
  });

  it('should return "User" as fallback if token is invalid/malformed', () => {
    localStorage.setItem('exchange_jwt_token', 'invalid.token.format');
    const username = service.getUsernameFromToken();
    
    expect(username).toBe('User');
  });

  it('should return true when token expires within the default 5-minute buffer', () => {
    localStorage.setItem('exchange_jwt_token', createTokenExpiringIn(2));

    expect(service.isTokenExpiringSoon()).toBe(true);
  });

  it('should return false when token expiration is outside the buffer window', () => {
    localStorage.setItem('exchange_jwt_token', createTokenExpiringIn(20));

    expect(service.isTokenExpiringSoon()).toBe(false);
  });

  it('should return false for expiring-soon check when token payload has no exp claim', () => {
    localStorage.setItem('exchange_jwt_token', createTokenWithPayload({ sub: 'testadmin' }));

    expect(service.isTokenExpiringSoon()).toBe(false);
  });

  it('should renew token, persist it, and return new access token', async () => {
    const renewedToken = createTokenExpiringIn(30);
    const renewalPromise = firstValueFrom(service.renewToken());

    const req = httpMock.expectOne(`${environment.apiUrl}/token/renew`);
    expect(req.request.method).toBe('POST');
    req.flush({ access_token: renewedToken, token_type: 'bearer' });

    await expect(renewalPromise).resolves.toBe(renewedToken);
    expect(localStorage.getItem('exchange_jwt_token')).toBe(renewedToken);
  });

  it('should logout when token renewal fails', async () => {
    const logoutSpy = vi.spyOn(service, 'logout').mockImplementation(() => undefined);
    const renewalPromise = firstValueFrom(service.renewToken());

    const req = httpMock.expectOne(`${environment.apiUrl}/token/renew`);
    req.flush({ detail: 'failure' }, { status: 500, statusText: 'Server Error' });

    await expect(renewalPromise).rejects.toBeDefined();
    expect(logoutSpy).toHaveBeenCalled();
  });

  it('should queue concurrent renewal calls and perform only one HTTP renewal request', () => {
    const renewedToken = createTokenExpiringIn(45);
    let firstResult: string | undefined;
    let secondResult: string | undefined;

    service.renewToken().subscribe(token => {
      firstResult = token;
    });

    service.renewToken().subscribe(token => {
      secondResult = token;
    });

    const renewRequests = httpMock.match(`${environment.apiUrl}/token/renew`);
    expect(renewRequests.length).toBe(1);

    renewRequests[0].flush({ access_token: renewedToken, token_type: 'bearer' });

    expect(firstResult).toBe(renewedToken);
    expect(secondResult).toBe(renewedToken);
    expect(localStorage.getItem('exchange_jwt_token')).toBe(renewedToken);
  });
});
