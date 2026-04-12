import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { finalize, tap } from 'rxjs/operators';

interface TokenResponse {
  access_token: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private tokenKey = 'exchange_jwt_token';

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<TokenResponse>(`${this.apiUrl}/token`, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.access_token);
      })
    );
  }

  logout() {
    this.http.post<void>(`${this.apiUrl}/logout`, {}).pipe(
      finalize(() => {
        localStorage.removeItem(this.tokenKey);
      })
    ).subscribe({
      error: () => {
        // Token must be removed locally even if backend logout fails.
      }
    });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUsernameFromToken(): string {
    const token = this.getToken();
    if (!token) return 'User';

    try {
      const payloadBase64Url = token.split('.')[1];
      
      const base64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
      
      const decodedPayload = JSON.parse(window.atob(base64));

      return decodedPayload.sub || 'User';
    } catch (error) {
      console.error('Error parsing JWT token:', error);
      return 'User';
    }
  }
}