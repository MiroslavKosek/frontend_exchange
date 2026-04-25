import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

type SupportedLanguage = 'en' | 'cs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);
  private logger = inject(NGXLogger);

  private readonly storageKey = 'lang';
  private readonly defaultLanguage: SupportedLanguage = 'en';

  readonly currentLang = signal<SupportedLanguage>(this.defaultLanguage);

  initialize(): void {
    this.logger.trace('Initializing TranslationService.');
    this.translate.setFallbackLang(this.defaultLanguage);

    const stored = this.getStoredLanguage();
    const browser = this.translate.getBrowserLang();

    this.logger.debug('Evaluated language sources', { stored, browser, default: this.defaultLanguage });

    const language = this.normalizeLanguage(stored ?? browser ?? this.defaultLanguage);
    this.setLanguage(language, false);
  }

  setLanguage(language: string, persist = true): void {
    const normalized = this.normalizeLanguage(language);

    this.logger.info(`Applying language: '${normalized}'`, { persist });

    this.currentLang.set(normalized);
    this.translate.use(normalized);

    if (persist && this.isBrowser()) {
      sessionStorage.setItem(this.storageKey, normalized);
      this.logger.trace(`Language saved to sessionStorage.`);
    }
  }

  getAngularLocale(language = this.currentLang()): string {
    return language === 'cs' ? 'cs-CZ' : 'en-US';
  }

  private getStoredLanguage(): string | null {
    if (!this.isBrowser()) {
      return null;
    }

    return sessionStorage.getItem(this.storageKey);
  }

  private normalizeLanguage(language: string): SupportedLanguage {
    const normalized = language.toLowerCase();

    if (normalized.includes('cs') || normalized.includes('cz')) {
      return 'cs';
    }

    if (!normalized.includes('en')) {
       this.logger.warn(`Unsupported language detected: '${language}'. Falling back to default: '${this.defaultLanguage}'.`);
    }

    return 'en';
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
