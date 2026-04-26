import { Component, OnInit, inject, signal, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExchangeService, ExchangeRateItem } from '../../services/exchange-service';
import { ThemeService } from '../../services/theme-service';

import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Table, TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { forkJoin } from 'rxjs';
import { TranslationService } from '../../services/translation-service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    TranslatePipe,
    FormsModule, 
    TableModule, 
    ChartModule, 
    MultiSelectModule,
    SelectModule, 
    InputTextModule, 
    IconFieldModule, 
    InputIconModule,
    ProgressSpinnerModule,
    MessageModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private readonly storageKeys = {
    baseCurrency: 'dashboard.baseCurrency',
    selectedTargets: 'dashboard.selectedTargets', // ADDED
    selectedCurrencies: 'dashboard.selectedCurrencies'
  };

  private translate = inject(TranslateService);
  private exchangeService = inject(ExchangeService);
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  translationService = inject(TranslationService);
  private logger = inject(NGXLogger);

  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  
  baseCurrency = signal<string>('CZK');
  availableCurrencies = signal<string[]>([]);
  date = signal<string>('');
  allRates = signal<ExchangeRateItem[]>([]);

  strongestCurrency = signal<{currency: string, value: number} | null>(null);
  weakestCurrency = signal<{currency: string, value: number} | null>(null);
  
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number
    }[] } | null = null;
  chartOptions: Record<string, unknown> = {};
  
  selectedTargets = signal<string[]>(['EUR', 'USD', 'GBP', 'CHF', 'PLN']);
  selectedCurrencies = signal<ExchangeRateItem[]>([]);

  constructor() {
    effect(() => {
      this.themeService.theme$.subscribe(() => {
        if (this.allRates().length > 0) {
          this.initChartOptions();
        }
      });
    });

    effect(() => {
      this.updateChartData(this.selectedCurrencies());
    });

    effect(() => {
      this.translationService.currentLang();

      if (this.allRates().length > 0) {
        this.updateChartData(this.selectedCurrencies());
        this.initChartOptions();
      }
    });

    effect(() => {
      this.selectedTargets();
      this.selectedCurrencies();
      this.persistDashboardState();
    });
  }

  ngOnInit() {
    this.logger.trace('Dashboard component initialized.');
    this.restoreDashboardState();

    this.isLoading.set(true);
    this.exchangeService.getAvailableCurrencies().subscribe({
      next: (currencies) => {
        this.logger.debug(`Loaded ${currencies.length} available currencies.`);
        this.availableCurrencies.set(currencies);
        // Pass the targets during initialization
        this.fetchData(this.baseCurrency(), this.selectedTargets());
      },
      error: (err) => {
        this.logger.error('Error fetching available currencies for dashboard.', err);
        this.error.set(this.translate.instant(_('Failed to load available currencies.')));
        this.isLoading.set(false);
      }
    });
  }

  fetchData(targetBase = 'CZK', targetCurrencies: string[] = this.selectedTargets()) {
    this.logger.info(`Fetching dashboard data for base currency: ${targetBase} and target currencies: ${targetCurrencies.join(', ')}`);
    this.isLoading.set(true);
    this.error.set(null);

    forkJoin({
      ratesData: this.exchangeService.getLatestRates(targetBase, targetCurrencies),
      extremesData: this.exchangeService.getExtremes(targetBase, targetCurrencies)
    }).subscribe({
      next: (results) => {
        this.logger.debug('Dashboard data fetched successfully.', { base: results.ratesData.base });

        const data = results.ratesData;
        const extremes = results.extremesData;
        const storedSelection = this.getStoredSelectedCurrencies();

        this.baseCurrency.set(data.base);
        this.date.set(data.date);
        this.allRates.set(data.rates);
        
        const initialSelection = storedSelection.length > 0
          ? data.rates.filter((rate) => storedSelection.includes(rate.currency))
          : data.rates.slice(0, 10);
        
        this.selectedCurrencies.set(initialSelection);
        
        this.strongestCurrency.set(extremes.strongest);
        this.weakestCurrency.set(extremes.weakest);

        this.initChartOptions();
        this.updateChartData(initialSelection);
        this.persistDashboardState();
        
        this.isLoading.set(false);
      },
      error: (err) => {
        this.logger.error(`Error fetching dashboard data for ${targetBase}:`, err);
        this.error.set(this.translate.instant(_('Failed to load dashboard data. Please try again later.')));
        this.isLoading.set(false);
      }
    });
  }

  onBaseCurrencyChange(newBase: string) {
    this.logger.info(`User changed dashboard base currency to: ${newBase}`);
    this.baseCurrency.set(newBase);
    this.persistDashboardState();
    this.fetchData(newBase, this.selectedTargets());
  }

  onTargetCurrenciesChange(targets: string[]) {
    this.logger.info(`User updated target currencies for dashboard API. Count: ${targets.length}`);
    this.selectedTargets.set(targets);
    this.persistDashboardState();
    this.fetchData(this.baseCurrency(), targets);
  }

  onSelectedCurrenciesChange(selected: ExchangeRateItem[]) {
    this.logger.info(`User updated selected currencies for dashboard chart. Count: ${selected.length}`);
    this.selectedCurrencies.set(selected);
    this.persistDashboardState();
  }

  private updateChartData(selectedRates: ExchangeRateItem[]) {
    if (!selectedRates || selectedRates.length === 0) {
      this.logger.trace('No currencies selected for chart rendering.');
      this.chartData = null;
      return;
    }

    this.logger.trace(`Updating dashboard chart data with ${selectedRates.length} currencies.`);
    this.chartData = {
      labels: selectedRates.map(r => r.currency),
      datasets: [
        {
          label: this.translate.instant(_('Rate against {{ baseCurrency }}'), { baseCurrency: this.baseCurrency() }),
          data: selectedRates.map(r => r.rate),
          backgroundColor: 'rgba(6, 182, 212, 0.5)',
          borderColor: 'rgb(6, 182, 212)',
          borderWidth: 1
        }
      ]
    };
  }

  private initChartOptions() {
    if (isPlatformBrowser(this.platformId)) {
      this.logger.trace('Initializing dashboard chart options based on active theme.');
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: { color: textColor }
          },
          tooltip: {
            callbacks: {
              label: (context: { parsed: { y: number }; dataset: { label: string } }) =>
                `${context.dataset.label}: ${context.parsed.y.toLocaleString(this.translate.getCurrentLang())}`
            }
          }
        },
        scales: {
          x: {
            ticks: { color: textColorSecondary, font: { weight: 500 } },
            grid: { color: surfaceBorder, drawBorder: false }
          },
          y: {
            ticks: {
              color: textColorSecondary,
              callback: (value: number) => value.toLocaleString(this.translate.getCurrentLang())
            },
            grid: { color: surfaceBorder, drawBorder: false }
          }
        }
      };
    }
  }

  clearGlobalFilter(table: Table) {
    this.logger.trace('User cleared dashboard table filter.');
    table.clear();
  }

  private restoreDashboardState() {
    if (!this.isBrowser()) {
      return;
    }

    const storedBaseCurrency = localStorage.getItem(this.storageKeys.baseCurrency);
    if (storedBaseCurrency) {
      this.logger.debug(`Restored dashboard base currency from local storage: ${storedBaseCurrency}`);
      this.baseCurrency.set(storedBaseCurrency);
    }

    const storedTargets = this.parseStoredArray(localStorage.getItem(this.storageKeys.selectedTargets));
    if (storedTargets.length > 0) {
      this.selectedTargets.set(storedTargets);
    }
  }

  private persistDashboardState() {
    if (!this.isBrowser()) {
      return;
    }

    localStorage.setItem(this.storageKeys.baseCurrency, this.baseCurrency());
    localStorage.setItem(this.storageKeys.selectedTargets, JSON.stringify(this.selectedTargets()));
    localStorage.setItem(
      this.storageKeys.selectedCurrencies,
      JSON.stringify(this.selectedCurrencies().map((rate) => rate.currency))
    );
  }

  private parseStoredArray(value: string | null): string[] {
    if (!value) return [];
    try {
      const parsed = JSON.parse(value);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((item): item is string => typeof item === 'string');
    } catch {
      this.logger.warn('Failed to parse array from local storage. Resetting state.', { rawValue: value });
      return [];
    }
  }

  private getStoredSelectedCurrencies(): string[] {
    if (!this.isBrowser()) return [];
    return this.parseStoredArray(localStorage.getItem(this.storageKeys.selectedCurrencies));
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
