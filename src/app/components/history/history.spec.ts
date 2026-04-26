import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Mock, vi } from 'vitest';

import { History } from './history';
import { ExchangeService, HistoricalRatesResponse } from '../../services/exchange-service';
import { ThemeService } from '../../services/theme-service';

describe('History', () => {
  let component: History;
  let fixture: ComponentFixture<History>;
  let mockExchangeService: {
    getAvailableCurrencies: Mock;
    getHistoricalRates: Mock;
  };
  let mockThemeService: { theme$: Observable<string> };
  let themeSubject: BehaviorSubject<string>;

  const mockHistoricalResponse: HistoricalRatesResponse = {
    base: 'CZK',
    period: {
      start: '2026-02-10',
      end: '2026-03-10'
    },
    averages: [
      { currency: 'EUR', rate: 0.04 },
      { currency: 'USD', rate: 0.045 }
    ]
  };

  function formatDate(date: Date): string {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  }

  beforeEach(async () => {
    themeSubject = new BehaviorSubject<string>('light');

    mockExchangeService = {
      getAvailableCurrencies: vi.fn().mockReturnValue(of(['CZK', 'EUR', 'USD'])),
      getHistoricalRates: vi.fn().mockReturnValue(of(mockHistoricalResponse))
    };

    mockThemeService = {
      theme$: themeSubject.asObservable()
    };

    await TestBed.configureTestingModule({
      imports: [History],
      providers: [
        { provide: ExchangeService, useValue: mockExchangeService },
        { provide: ThemeService, useValue: mockThemeService },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(History);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize and load currencies and historical averages', () => {
    fixture.detectChanges();

    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    expect(mockExchangeService.getAvailableCurrencies).toHaveBeenCalled();
    expect(mockExchangeService.getHistoricalRates).toHaveBeenCalledWith(
      formatDate(thirtyDaysAgo),
      formatDate(today),
      'CZK',
      ['EUR', 'USD']
    );
    expect(component.availableCurrencies()).toEqual(['CZK', 'EUR', 'USD']);
    expect(component.averagesData().length).toBe(2);
    expect(component.periodInfo()).toEqual(mockHistoricalResponse.period);
    expect(component.chartData?.labels).toEqual(['EUR', 'USD']);
    expect(component.error()).toBeNull();
    expect(component.isLoading()).toBe(false);
  });

  it('should set error when loading currencies fails', () => {
    mockExchangeService.getAvailableCurrencies.mockReturnValue(
      throwError(() => new Error('Network error'))
    );

    fixture.detectChanges();

    expect(component.error()).toBe('Failed to load available currencies.');
    expect(component.isLoading()).toBe(false);
    expect(mockExchangeService.getHistoricalRates).not.toHaveBeenCalled();
  });

  it('should set validation error for invalid date range', () => {
    component.dateRange.set([]);

    component.fetchHistory();

    expect(component.error()).toBe('Please select a valid date range (From - To).');
    expect(mockExchangeService.getHistoricalRates).not.toHaveBeenCalled();
  });

  it('should set validation error when no target currency is selected', () => {
    component.dateRange.set([new Date('2026-02-10'), new Date('2026-03-10')]);
    component.selectedTargets.set([]);

    component.fetchHistory();

    expect(component.error()).toBe('Please select at least one target currency for averaging.');
    expect(mockExchangeService.getHistoricalRates).not.toHaveBeenCalled();
  });

  it('should handle empty averages response', () => {
    mockExchangeService.getHistoricalRates.mockReturnValue(
      of({
        ...mockHistoricalResponse,
        averages: []
      })
    );

    fixture.detectChanges();

    expect(component.error()).toBe('No data available for the selected period.');
    expect(component.chartData).toBeNull();
    expect(component.averagesData()).toEqual([]);
    expect(component.periodInfo()).toBeNull();
    expect(component.isLoading()).toBe(false);
  });

  it('should handle historical request error', () => {
    mockExchangeService.getHistoricalRates.mockReturnValue(
      throwError(() => new Error('API failure'))
    );

    fixture.detectChanges();

    expect(component.error()).toBe('Failed to download analytical data. Please check your connection and parameters.');
    expect(component.isLoading()).toBe(false);
  });

  it('should reinitialize chart options when theme changes and averages are loaded', () => {
    fixture.detectChanges();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initChartSpy = vi.spyOn(component as any, 'initChartOptions');

    themeSubject.next('dark');

    expect(initChartSpy).toHaveBeenCalled();
  });

  describe('HTML Rendering', () => {
    it('should display loader during loading', () => {
      fixture.detectChanges();

      component.isLoading.set(true);
      component.error.set(null);
      component.averagesData.set([]);

      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p-progressspinner')).toBeTruthy();
    });

    it('should display error message when an error occurs', () => {
      fixture.detectChanges();

      component.isLoading.set(false);
      component.error.set('Something went wrong');

      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Something went wrong');
    });

    it('should display chart and table when data is available', () => {
      component.isLoading.set(false);
      component.error.set(null);
      component.periodInfo.set({ start: '2026-02-10', end: '2026-03-10' });
      component.averagesData.set([
        { currency: 'EUR', rate: 0.04 },
        { currency: 'USD', rate: 0.045 }
      ]);
      component.chartData = {
        labels: ['EUR', 'USD'],
        datasets: [
          {
            label: 'Average rate against CZK',
            data: [0.04, 0.045],
            borderColor: 'rgb(6, 182, 212)',
            borderWidth: 1
          }
        ]
      };

      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p-progressspinner')).toBeFalsy();
      expect(compiled.querySelector('p-message')).toBeFalsy();
      expect(compiled.querySelector('p-chart')).toBeTruthy();
      expect(compiled.querySelector('p-table')).toBeTruthy();
      expect(compiled.textContent).toContain('Average Values');
    });
  });
});
