import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authGuard } from './auth-guard';
import { AuthService } from '../services/auth-service';
import { vi, Mock } from 'vitest';

describe('authGuard', () => {
  let mockAuthService: { getToken: Mock };
  let mockRouter: { parseUrl: Mock };

  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    mockAuthService = {
      getToken: vi.fn()
    };

    mockRouter = {
      parseUrl: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should return true if the user has a token', () => {
    mockAuthService.getToken.mockReturnValue('fake-jwt-token');

    const result = executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(result).toBe(true);
  });

  it('should return a UrlTree for redirection to login if the token is missing', () => {
    mockAuthService.getToken.mockReturnValue(null);
    const mockUrlTree = {} as UrlTree;
    mockRouter.parseUrl.mockReturnValue(mockUrlTree);

    const result = executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(mockRouter.parseUrl).toHaveBeenCalledWith('/login');
    expect(result).toBe(mockUrlTree);
  });
});
