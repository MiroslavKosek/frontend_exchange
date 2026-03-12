import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

export interface ExchangeRateItem {
  currency: string;
  rate: number;
}

export interface LatestRatesResponse {
  base: string;
  date: string;
  rates: ExchangeRateItem[];
}

interface LatestRatesApiResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getLatestRates(base = 'CZK'): Observable<LatestRatesResponse> {
    return this.http.get<LatestRatesApiResponse>(`${this.apiUrl}/api/rates/latest?base=${base}`).pipe(
      map(response => {
        const ratesArray: ExchangeRateItem[] = Object.entries(response.rates).map(
          ([currency, rate]) => ({ currency, rate })
        );
        
        return {
          base: response.base,
          date: this.convertDateToLocalFormat(response.date),
          rates: ratesArray
        };
      })
    );
  }

  private convertDateToLocalFormat(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }
}