import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type SupportedLanguage = 'en' | 'cs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);
  private readonly storageKey = 'lang';
  private readonly defaultLanguage: SupportedLanguage = 'en';

  readonly currentLang = signal<SupportedLanguage>(this.defaultLanguage);

  initialize(): void {
    this.translate.setFallbackLang(this.defaultLanguage);

    const stored = this.getStoredLanguage();
    const browser = this.translate.getBrowserLang();
    const language = this.normalizeLanguage(stored ?? browser ?? this.defaultLanguage);

    this.setLanguage(language, false);
  }

  setLanguage(language: string, persist = true): void {
    const normalized = this.normalizeLanguage(language);

    this.currentLang.set(normalized);
    this.translate.use(normalized);

    if (persist && this.isBrowser()) {
      sessionStorage.setItem(this.storageKey, normalized);
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

    return 'en';
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}