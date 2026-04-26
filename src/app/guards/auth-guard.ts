import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { NGXLogger } from 'ngx-logger';

export const authGuard: CanActivateFn = (_route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const logger = inject(NGXLogger);

  logger.trace(`AuthGuard intercepting navigation attempt to: ${state.url}`);

  if (authService.getToken()) {
    logger.debug(`Access granted for protected route: ${state.url}`);
    return true;
  }
  
  logger.info(`Unauthorized routing attempt to ${state.url}. Redirecting to /login.`);
  return router.parseUrl('/login');
};
