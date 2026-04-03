import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

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

export interface HistoricalRatesResponse {
  base: string;
  period: {
    start: string;
    end: string;
  };
  averages: ExchangeRateItem[];
}

interface HistoricalRatesApiResponse {
  base: string;
  period: {
    start: string;
    end: string;
  };
  averages: Record<string, number>;
}

export interface ExtremesResponse {
  base: string;
  date: string;
  strongest: { currency: string; value: number };
  weakest: { currency: string; value: number };
}

export interface CurrenciesApiResponse {
  currencies: Record<string, string>;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private translate = inject(TranslateService);
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getAvailableCurrencies(): Observable<string[]> {
    return this.http.get<CurrenciesApiResponse>(`${this.apiUrl}/api/rates/currencies`).pipe(
      map(response => Object.keys(response.currencies).sort())
    );
  }

  getLatestRates(base = 'CZK'): Observable<LatestRatesResponse> {
    return this.http.get<LatestRatesApiResponse>(`${this.apiUrl}/api/rates/latest?base=${base}`).pipe(
      map(response => {
        const ratesArray: ExchangeRateItem[] = Object.entries(response.rates).map(
          ([currency, rate]) => ({ currency, rate })
        );

        return {
          base: response.base,
          date: response.date,
          rates: ratesArray
        };
      })
    );
  }

  getExtremes(base = 'CZK'): Observable<ExtremesResponse> {
    return this.http.get<ExtremesResponse>(`${this.apiUrl}/api/rates/analytics/extremes?base=${base}`);
  }

  getHistoricalRates(startDate: string, endDate: string, base = 'CZK', targets: string[] = []): Observable<HistoricalRatesResponse> {
    let params = new HttpParams()
      .set('start_date', startDate)
      .set('end_date', endDate)
      .set('base', base);

    if (targets && targets.length > 0) {
      targets.forEach(target => {
        params = params.append('symbols', target);
      });
    }
    
    return this.http.get<HistoricalRatesApiResponse>(`${this.apiUrl}/api/rates/analytics/average`, { params }).pipe(
      map(response => {
        const averagesArray: ExchangeRateItem[] = Object.entries(response.averages).map(
          ([currency, rate]) => ({ currency, rate })
        );

        return {
          base: response.base,
          period: {
            start: response.period.start,
            end: response.period.end
          },
          averages: averagesArray
        };
      })
    );
  }
}