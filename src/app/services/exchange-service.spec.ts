import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { CurrenciesApiResponse, ExchangeService, ExtremesResponse } from './exchange-service';
import { environment } from '../../environments/environment';

describe('ExchangeService', () => {
  let service: ExchangeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ExchangeService
      ]
    });

    service = TestBed.inject(ExchangeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sorted available currencies', () => {
    const mockResponse: CurrenciesApiResponse = {
      currencies: {
        USD: 'US Dollar',
        CZK: 'Czech Koruna',
        EUR: 'Euro'
      }
    };

    service.getAvailableCurrencies().subscribe((currencies) => {
      expect(currencies).toEqual(['CZK', 'EUR', 'USD']);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/api/rates/currencies`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should map latest rates API object to rates array and format date', () => {
    const apiDate = '2026-03-10';
    const expectedDate = apiDate;

    service.getLatestRates('CZK').subscribe((response) => {
      expect(response.base).toBe('CZK');
      expect(response.date).toBe(expectedDate);
      expect(response.rates).toEqual([
        { currency: 'EUR', rate: 0.04 },
        { currency: 'USD', rate: 0.045 }
      ]);
    });

    const req = httpMock.expectOne((request) => {
      const symbols = request.params.getAll('symbols') ?? [];
      return request.url === `${environment.apiUrl}/api/rates/latest`
        && request.params.get('base') === 'CZK'
        && symbols.length === 2
        && symbols[0] === 'EUR'
        && symbols[1] === 'USD';
    });
    expect(req.request.method).toBe('GET');
    req.flush({
      base: 'CZK',
      date: apiDate,
      rates: {
        EUR: 0.04,
        USD: 0.045
      }
    });
  });

  it('should fetch extremes for selected base currency', () => {
    const mockResponse: ExtremesResponse = {
      base: 'CZK',
      date: '2026-03-10',
      strongest: { currency: 'EUR', value: 0.04 },
      weakest: { currency: 'AUD', value: 1.5 }
    };

    service.getExtremes('CZK').subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne((request) => {
      const symbols = request.params.getAll('symbols') ?? [];
      return request.url === `${environment.apiUrl}/api/rates/analytics/extremes`
        && request.params.get('base') === 'CZK'
        && symbols.length === 2
        && symbols[0] === 'EUR'
        && symbols[1] === 'USD';
    });
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should map historical averages object to array and convert period dates', () => {
    const start = '2026-02-01';
    const end = '2026-02-28';
    const expectedStart = start;
    const expectedEnd = end;

    service.getHistoricalRates(start, end, 'CZK', ['EUR', 'USD']).subscribe((response) => {
      expect(response.base).toBe('CZK');
      expect(response.period).toEqual({
        start: expectedStart,
        end: expectedEnd
      });
      expect(response.averages).toEqual([
        { currency: 'EUR', rate: 0.04 },
        { currency: 'USD', rate: 0.045 }
      ]);
    });

    const req = httpMock.expectOne((request) => {
      const symbols = request.params.getAll('symbols') ?? [];
      return request.url === `${environment.apiUrl}/api/rates/analytics/average`
        && request.params.get('start_date') === start
        && request.params.get('end_date') === end
        && request.params.get('base') === 'CZK'
        && symbols.length === 2
        && symbols[0] === 'EUR'
        && symbols[1] === 'USD';
    });

    expect(req.request.method).toBe('GET');
    req.flush({
      base: 'CZK',
      period: {
        start,
        end
      },
      averages: {
        EUR: 0.04,
        USD: 0.045
      }
    });
  });
});
