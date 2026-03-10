import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';
import { environment } from '../../environments/environment';
import { vi } from 'vitest';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  
  // A valid mock JWT token where the payload 'sub' is 'testadmin'
  // Header: {"alg":"HS256","typ":"JWT"}
  // Payload: {"sub":"testadmin","exp":1700000000}
  const mockValidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0YWRtaW4iLCJleHAiOjE3MDAwMDAwMDB9.signature';

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
    vi.spyOn(console, 'error').mockImplementation(() => { /* suppress output */ });
    
    localStorage.setItem('exchange_jwt_token', 'invalid.token.format');
    const username = service.getUsernameFromToken();
    
    expect(username).toBe('User');
    expect(console.error).toHaveBeenCalled();
  });
});
