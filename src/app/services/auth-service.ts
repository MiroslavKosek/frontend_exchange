import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

interface TokenResponse {
  access_token: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private logger = inject(NGXLogger);
  private apiUrl = environment.apiUrl;
  private tokenKey = 'exchange_jwt_token';

  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  login(username: string, password: string) {
    this.logger.info(`Login attempt initiated for user: ${username}`);
    
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<TokenResponse>(`${this.apiUrl}/token`, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).pipe(
      tap({
        next: (response) => {
          this.logger.info(`Login successful for user: ${username}. Storing access token.`);
          localStorage.setItem(this.tokenKey, response.access_token);
        },
        error: (err) => {
          this.logger.error(`Login failed for user: ${username}`, err);
        }
      })
    );
  }

  logout() {
    this.logger.info('Logout initiated.');

    this.http.post<void>(`${this.apiUrl}/logout`, {}).pipe(
      finalize(() => {
        this.logger.trace('Executing local storage cleanup post-logout.');
        localStorage.removeItem(this.tokenKey);
      })
    ).subscribe({
      next: () => this.logger.info('Backend session terminated successfully.'),
      error: (err) => {
        // Token must be removed locally even if backend logout fails.
        this.logger.warn('Backend logout call failed. Local session was still terminated.', err);
      }
    });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private getTokenExpirationDate(token: string): Date | null {
    try {
      const payloadBase64Url = token.split('.')[1];
      const base64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = JSON.parse(window.atob(base64));
      
      if (!decodedPayload.exp) {
        return null;
      }

      const date = new Date(0);
      date.setUTCSeconds(decodedPayload.exp);
      return date;
    } catch (error) {
      this.logger.error('Failed to parse token expiration date.', error);
      return null;
    }
  }

  isTokenExpiringSoon(bufferMinutes = 5): boolean {
    const token = this.getToken();
    if (!token) return false;

    const expDate = this.getTokenExpirationDate(token);
    if (!expDate) return false;

    const now = new Date();
    const timeDiffMs = expDate.getTime() - now.getTime();

    const isExpiring = timeDiffMs > 0 && timeDiffMs < (bufferMinutes * 60 * 1000);

    if (isExpiring) {
      this.logger.debug(`Token is expiring in ${Math.round(timeDiffMs / 60000)} minutes.`);
    }

    return isExpiring;
  }

  renewToken(): Observable<string> {
    if (this.isRefreshing) {
      this.logger.trace('Token renewal already in progress. Queueing request.');
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        map(token => token as string)
      );
    }

    this.logger.info('Initiating access token renewal request to backend.');
    this.isRefreshing = true;
    this.refreshTokenSubject.next(null);

    return this.http.post<TokenResponse>(`${this.apiUrl}/token/renew`, {}).pipe(
      switchMap((response) => {
        this.logger.info('Token successfully renewed.');
        localStorage.setItem(this.tokenKey, response.access_token);
        
        this.isRefreshing = false;
        this.refreshTokenSubject.next(response.access_token); 
        
        return of(response.access_token);
      }),
      catchError((err) => {
        this.isRefreshing = false;
        this.logger.error('Failed to renew token. Terminating session.', err);
        this.logout();
        return throwError(() => err);
      })
    );
  }

  getUsernameFromToken(): string {
    this.logger.trace('Attempting to extract username from JWT token.');
    const token = this.getToken();
    
    if (!token) {
      this.logger.warn('Cannot extract username: No JWT token found in local storage.');
      return 'User';
    }

    try {
      const payloadBase64Url = token.split('.')[1];
      const base64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = JSON.parse(window.atob(base64));

      this.logger.debug(`Successfully parsed JWT payload for subject: ${decodedPayload.sub || 'unknown'}`);
      return decodedPayload.sub || 'User';
    } catch (error) {
      this.logger.fatal('Critical error parsing JWT token. Token format is corrupted or invalid.', error);
      return 'User';
    }
  }
}
