import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

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
  private logger = inject(NGXLogger);
  private apiUrl = environment.apiUrl;

  getAvailableCurrencies(): Observable<string[]> {
    this.logger.debug('Fetching available currencies.');
    
    return this.http.get<CurrenciesApiResponse>(`${this.apiUrl}/api/rates/currencies`).pipe(
      tap({
        next: () => this.logger.info('Successfully retrieved available currencies.'),
        error: (err) => this.logger.error('Failed to fetch available currencies.', err)
      }),
      map(response => {
        this.logger.trace('Sorting and mapping currencies response.');
        return Object.keys(response.currencies).sort();
      })
    );
  }

  getLatestRates(base = 'CZK', targets: string[] = ['EUR', 'USD']): Observable<LatestRatesResponse> {
    this.logger.debug(`Fetching latest rates with base currency: ${base} and targets: ${targets.join(', ')}`);
    
    let params = new HttpParams().set('base', base);
    if (targets && targets.length > 0) {
      targets.forEach(target => {
        params = params.append('symbols', target);
      });
    }

    return this.http.get<LatestRatesApiResponse>(`${this.apiUrl}/api/rates/latest`, { params }).pipe(
      tap({
        next: () => this.logger.info(`Successfully retrieved latest rates for base: ${base} and targets: ${targets.join(', ')}.`),
        error: (err) => this.logger.error(`API Error fetching latest rates for ${base} and targets: ${targets.join(', ')}.`, err)
      }),
      map(response => {
        this.logger.trace('Transforming rates object into array format.');
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

  getExtremes(base = 'CZK', targets: string[] = ['EUR', 'USD']): Observable<ExtremesResponse> {
    this.logger.debug(`Fetching extreme exchange rates for base: ${base} and targets: ${targets.join(', ')}`);
    
    let params = new HttpParams().set('base', base);
    if (targets && targets.length > 0) {
      targets.forEach(target => {
        params = params.append('symbols', target);
      });
    }

    return this.http.get<ExtremesResponse>(`${this.apiUrl}/api/rates/analytics/extremes`, { params }).pipe(
      tap({
        error: (err) => this.logger.error(`Failed to fetch rate extremes for ${base} and targets: ${targets.join(', ')}.`, err)
      })
    );
  }

  getHistoricalRates(startDate: string, endDate: string, base = 'CZK', targets: string[] = []): Observable<HistoricalRatesResponse> {
    this.logger.debug(`Fetching historical rates from ${startDate} to ${endDate}`, { base, targets });
    
    let params = new HttpParams()
      .set('start_date', startDate)
      .set('end_date', endDate)
      .set('base', base);

    if (targets && targets.length > 0) {
      targets.forEach(target => {
        params = params.append('symbols', target);
      });
      this.logger.trace(`Appended ${targets.length} target symbols to HTTP Params.`);
    }
    
    return this.http.get<HistoricalRatesApiResponse>(`${this.apiUrl}/api/rates/analytics/average`, { params }).pipe(
      tap({
        next: () => this.logger.info(`Successfully retrieved historical rates for period ${startDate} - ${endDate}.`),
        error: (err) => this.logger.error('Failed to fetch historical rates.', err)
      }),
      map(response => {
        this.logger.trace('Transforming historical averages object into array format.');
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
