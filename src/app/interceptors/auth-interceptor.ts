import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service';
import { NGXLogger } from 'ngx-logger';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const logger = inject(NGXLogger);

  if (req.url.endsWith('/token') || req.url.endsWith('/token/renew') || req.url.endsWith('/logout')) {
    let clonedReq = req;
    const token = authService.getToken();
    if (token) {
      clonedReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    }
    return next(clonedReq);
  }

  let tokenStream$ = of(authService.getToken());

  if (authService.isTokenExpiringSoon(5)) {
    logger.debug(`Intercepted request to ${req.url}: Token requires renewal.`);
    tokenStream$ = authService.renewToken();
  }

  return tokenStream$.pipe(
    switchMap(token => {
      let clonedReq = req;
      
      if (token) {
        logger.trace(`Appending Authorization header to request: ${req.url}`);
        clonedReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
      } else {
        logger.trace(`No token found for request: ${req.url}`);
      }

      return next(clonedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 || error.status === 403) {
            logger.warn(`Authentication error (${error.status}) on ${req.url}. Forcing logout and redirecting.`);
            authService.logout();
            router.navigate(['/login']);
          } else {
            logger.debug(`HTTP request failed: ${req.url}`, error);
          }
          
          return throwError(() => error);
        })
      );
    })
  );
};
