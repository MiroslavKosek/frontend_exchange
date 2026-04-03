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
  private translate = inject(TranslateService);
  private exchangeService = inject(ExchangeService);
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  translationService = inject(TranslationService);

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
  }

  ngOnInit() {
    this.isLoading.set(true);
    this.exchangeService.getAvailableCurrencies().subscribe({
      next: (currencies) => {
        this.availableCurrencies.set(currencies);
        this.fetchData();
      },
      error: (err) => {
        console.error('Error fetching currencies:', err);
        this.error.set(this.translate.instant(_('Failed to load available currencies.')));
        this.isLoading.set(false);
      }
    });
  }

  fetchData(targetBase = 'CZK') {
    this.isLoading.set(true);
    this.error.set(null);

    forkJoin({
      ratesData: this.exchangeService.getLatestRates(targetBase),
      extremesData: this.exchangeService.getExtremes(targetBase)
    }).subscribe({
      next: (results) => {
        const data = results.ratesData;
        const extremes = results.extremesData;

        this.baseCurrency.set(data.base);
        this.date.set(data.date);
        this.allRates.set(data.rates);
        
        const initialSelection = data.rates.slice(0, 10);
        this.selectedCurrencies.set(initialSelection);
        
        this.strongestCurrency.set(extremes.strongest);
        this.weakestCurrency.set(extremes.weakest);

        this.initChartOptions();
        this.updateChartData(initialSelection);
        
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching dashboard data:', err);
        this.error.set(this.translate.instant(_('Failed to load dashboard data. Please try again later.')));
        this.isLoading.set(false);
      }
    });
  }

  onBaseCurrencyChange(newBase: string) {
     this.fetchData(newBase);
  }

  private updateChartData(selectedRates: ExchangeRateItem[]) {
    if (!selectedRates || selectedRates.length === 0) {
      this.chartData = null;
      return;
    }

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
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
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
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary,
              callback: (value: number) => value.toLocaleString(this.translate.getCurrentLang())
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    }
  }

  clearGlobalFilter(table: Table) {
    table.clear();
  }
}