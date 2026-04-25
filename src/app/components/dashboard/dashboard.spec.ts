import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Mock, vi } from 'vitest';

import { Dashboard } from './dashboard';
import { ExchangeService, ExtremesResponse, LatestRatesResponse } from '../../services/exchange-service';
import { ThemeService } from '../../services/theme-service';

describe('Dashboard Component', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;
  let mockExchangeService: {
    getAvailableCurrencies: Mock;
    getLatestRates: Mock;
    getExtremes: Mock;
  };
  let mockThemeService: { theme$: Observable<string> };
  let themeSubject: BehaviorSubject<string>;

  const mockApiData: LatestRatesResponse = {
    base: 'CZK',
    date: '2026-03-10',
    rates: [
      { currency: 'AUD', rate: 1.5 },
      { currency: 'EUR', rate: 0.04 },
      { currency: 'USD', rate: 0.045 },
      { currency: 'BGN', rate: 0.08 }
    ]
  };

  const mockExtremesData: ExtremesResponse = {
    base: 'CZK',
    date: '2026-03-10',
    strongest: { currency: 'EUR', value: 0.04 },
    weakest: { currency: 'AUD', value: 1.5 }
  };

  beforeEach(async () => {
    themeSubject = new BehaviorSubject<string>('light');

    mockExchangeService = {
      getAvailableCurrencies: vi.fn().mockReturnValue(of(['CZK', 'EUR', 'USD', 'AUD', 'BGN'])),
      getLatestRates: vi.fn().mockReturnValue(of(mockApiData)),
      getExtremes: vi.fn().mockReturnValue(of(mockExtremesData))
    };

    mockThemeService = {
      theme$: themeSubject.asObservable()
    };

    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        provideHttpClient(),
        { provide: ExchangeService, useValue: mockExchangeService },
        { provide: ThemeService, useValue: mockThemeService },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    
    fixture.detectChanges(); 
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with correct data', () => {
    expect(component).toBeTruthy();

    expect(mockExchangeService.getAvailableCurrencies).toHaveBeenCalled();
    
    expect(mockExchangeService.getLatestRates).toHaveBeenCalledWith('CZK');
    expect(mockExchangeService.getExtremes).toHaveBeenCalledWith('CZK');
    
    expect(component.baseCurrency()).toBe('CZK');
    expect(component.date()).toBe('2026-03-10');
    expect(component.allRates().length).toBe(4);
    expect(component.isLoading()).toBe(false);
    expect(component.error()).toBeNull();
  });

  it('should correctly calculate the strongest and weakest currency', () => {
    expect(component.strongestCurrency()?.currency).toBe('EUR');
    expect(component.weakestCurrency()?.currency).toBe('AUD');
  });

  it('should catch errors when fetching data and set the error message', () => {
    mockExchangeService.getLatestRates.mockReturnValue(throwError(() => new Error('Server Down')));
    
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { /* no-op to suppress error logs during testing */ });

    component.fetchData();
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalled();
    expect(component.isLoading()).toBe(false);
    expect(component.error()).toBe('Failed to load dashboard data. Please try again later.');
  });

  it('should update data when base currency changes (Coverage for onBaseCurrencyChange)', () => {
    const newMockData: LatestRatesResponse = { ...mockApiData, base: 'USD' };
    mockExchangeService.getLatestRates.mockReturnValue(of(newMockData));
    mockExchangeService.getExtremes.mockReturnValue(of({ ...mockExtremesData, base: 'USD' }));

    component.onBaseCurrencyChange('USD');
    
    expect(mockExchangeService.getLatestRates).toHaveBeenCalledWith('USD');
    expect(mockExchangeService.getExtremes).toHaveBeenCalledWith('USD');
    expect(component.baseCurrency()).toBe('USD');
  });

  it('should clear chart display when user clears selection (Coverage for updateChartData)', () => {
    component.selectedCurrencies.set([]);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).updateChartData([]);

    expect(component.chartData).toBeNull();
  });

  it('should reinitialize chart options when theme changes (Coverage for effect)', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initChartSpy = vi.spyOn(component as any, 'initChartOptions');
    
    themeSubject.next('dark');
    
    fixture.detectChanges();
    
    await fixture.whenStable();

    expect(initChartSpy).toHaveBeenCalled();
  });

  it('should reset PrimeNG table (Coverage for clearGlobalFilter)', () => {
    const mockTable = { clear: vi.fn() };
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component.clearGlobalFilter(mockTable as any);

    expect(mockTable.clear).toHaveBeenCalled();
  });

  describe('HTML Rendering (Coverage for dashboard.html)', () => {
    it('should display loader during loading', () => {
      component.isLoading.set(true);
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p-progressspinner')).toBeTruthy();
    });

    it('should display error banner, if an error occurs', () => {
      component.isLoading.set(false);
      component.error.set('Something went wrong');
      fixture.detectChanges();
      
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Something went wrong');
    });

    it('should display table and chart when data is ready', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      
      expect(compiled.querySelector('p-progressspinner')).toBeFalsy();
      expect(compiled.querySelector('p-message')).toBeFalsy();

      expect(compiled.textContent).toContain('Current Rates');
      expect(compiled.textContent).toContain('Strongest Currency');
      
      expect(compiled.querySelector('p-table')).toBeTruthy();
      expect(compiled.querySelector('p-chart')).toBeTruthy();
    });
  });
});
