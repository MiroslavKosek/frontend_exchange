import { Component, OnInit, inject, signal, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExchangeRateItem, ExchangeService } from '../../services/exchange-service';
import { ThemeService } from '../../services/theme-service';

import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TranslationService } from '../../services/translation-service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    FormsModule,
    TableModule,
    ChartModule,
    MultiSelectModule,
    SelectModule,
    DatePickerModule,
    ButtonModule,
    ProgressSpinnerModule,
    MessageModule,
    ToolbarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History implements OnInit {
  private translate = inject(TranslateService);
  private exchangeService = inject(ExchangeService);
  private themeService = inject(ThemeService);
  private platformId = inject(PLATFORM_ID);
  translationService = inject(TranslationService);

  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  baseCurrency = signal<string>('CZK');
  availableCurrencies = signal<string[]>([]);
  selectedTargets = signal<string[]>(['EUR', 'USD']);
  
  dateRange = signal<Date[]>([]);

  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: (number | null)[];
      backgroundColor?: string | string[];
      borderColor: string | string[];
      borderWidth: number;
      fill?: boolean;
      tension?: number;
      pointRadius?: number;
    }[] } | null = null;
  chartOptions: Record<string, unknown> = {};
  averagesData = signal<ExchangeRateItem[]>([]);
  periodInfo = signal<{start: string, end: string} | null>(null);

  constructor() {
    effect(() => {
      this.themeService.theme$.subscribe(() => {
        if (this.averagesData().length > 0) {
          this.initChartOptions();
        }
      });

      if (this.averagesData().length > 0) {
        this.initChartOptions();
      }
    });

    effect(() => {
      this.translationService.currentLang();

      if (this.averagesData().length > 0) {
        this.processChartData(this.averagesData());
        this.initChartOptions();
      }
    });
  }

  ngOnInit() {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    this.dateRange.set([thirtyDaysAgo, today]);

    this.initChartOptions();
    
    this.isLoading.set(true);
    this.exchangeService.getAvailableCurrencies().subscribe({
      next: (currencies) => {
        this.availableCurrencies.set(currencies);
        this.fetchHistory();
      },
      error: (err) => {
        console.error('Error fetching currencies:', err);
        this.error.set(this.translate.instant(_('Failed to load available currencies.')));
        this.isLoading.set(false);
      }
    });
  }

  fetchHistory() {
    const dates = this.dateRange();
    if (!dates || dates.length !== 2 || !dates[0] || !dates[1]) {
      this.error.set(this.translate.instant(_('Please select a valid date range (From - To).')));
      return;
    }

    const targets = this.selectedTargets();
    if (!targets || targets.length === 0) {
        this.error.set(this.translate.instant(_('Please select at least one target currency for averaging.')));
        return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    const startDateStr = this.formatDate(dates[0]);
    const endDateStr = this.formatDate(dates[1]);
    const base = this.baseCurrency();

    this.exchangeService.getHistoricalRates(startDateStr, endDateStr, base, targets).subscribe({
      next: (response) => {
        if (!response.averages || response.averages.length === 0) {
          this.error.set(this.translate.instant(_('No data available for the selected period.')));
          this.chartData = null;
          this.averagesData.set([]);
          this.periodInfo.set(null);
          this.isLoading.set(false);
          return;
        }
        
        this.periodInfo.set(response.period);
        this.averagesData.set(response.averages);
        
        this.processChartData(response.averages);
        
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error while fetching averages:', err);
        this.error.set(this.translate.instant(_('Failed to download analytical data. Please check your connection and parameters.')));
        this.isLoading.set(false);
      }
    });
  }

  getDateFormatForLocale(): string {
    const locale = this.translate.getCurrentLang();
    const dateFormats: Record<string, string> = {
      'en': 'yy/mm/dd',
      'cs': 'd. m. yy'
    };
    return dateFormats[locale] || 'mm/dd/yy';
  }

  private processChartData(averages: ExchangeRateItem[]) {
    this.chartData = {
      labels: averages.map(a => a.currency),
      datasets: [
        {
          label: this.translate.instant(_('Average rate against {{ baseCurrency }}'), { baseCurrency: this.baseCurrency() }),
          data: averages.map(a => a.rate),
          backgroundColor: averages.map((_, i) => this.getColorForIndex(i, 0.6)),
          borderColor: averages.map((_, i) => this.getColorForIndex(i, 1)),
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
        aspectRatio: 0.6,
        plugins: {
          legend: { labels: { color: textColor } },
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
            ticks: { color: textColorSecondary, callback: (value: number) => value.toLocaleString(this.translate.getCurrentLang()) },
            grid: { color: surfaceBorder, drawBorder: false }
          }
        }
      };
    }
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  private getColorForIndex(index: number, alpha: number): string {
    const colors = [
      `rgba(6, 182, 212, ${alpha})`,
      `rgba(249, 115, 22, ${alpha})`,
      `rgba(139, 92, 246, ${alpha})`,
      `rgba(16, 185, 129, ${alpha})`,
      `rgba(239, 68, 68, ${alpha})`,
      `rgba(59, 130, 246, ${alpha})`,
      `rgba(234, 179, 8, ${alpha})`
    ];
    return colors[index % colors.length];
  }
}