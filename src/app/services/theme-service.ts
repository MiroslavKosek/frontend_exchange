import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject<object>(PLATFORM_ID);
  private logger = inject(NGXLogger);

  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    } else {
      this.logger.trace('Theme initialization skipped (SSR environment detected).');
    }
  }

  private initTheme() {
    this.logger.trace('Evaluating user theme preferences.');
    
    try {
      const storedTheme = localStorage.getItem('themePreference');
      const prefersDarkMedia = typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;

      this.logger.debug('Theme evaluation data retrieved', { 
        storedTheme, 
        systemPrefersDark: prefersDarkMedia?.matches 
      });

      if (storedTheme) {
        this.setTheme(storedTheme, false);
      } else {
        this.setTheme(prefersDarkMedia?.matches ? 'dark' : 'light', false);
      }

      prefersDarkMedia?.addEventListener('change', (e) => {
        this.logger.info('System OS color scheme changed by user.', { isDark: e.matches });
        if (!localStorage.getItem('themePreference')) {
          this.setTheme(e.matches ? 'dark' : 'light', false);
        }
      });
    } catch (err) {
      this.logger.error('Failed to initialize theme preferences.', err);
    }
  }

  setTheme(theme: string, saveUserPreference = true) {
    if (isPlatformBrowser(this.platformId)) {
      if (saveUserPreference) {
        localStorage.setItem('themePreference', theme);
        this.logger.trace(`Theme '${theme}' persisted to localStorage.`);
      }

      const element = document.querySelector('html');

      if (!element) {
        this.logger.fatal('Critical DOM structure missing: <html> element not found. Cannot apply theme classes.');
        return;
      }

      if (theme === 'light') {
        element.classList.remove('app-dark');
      } else {
        element.classList.add('app-dark');
      }
      
      this.logger.info(`Applied '${theme}' theme successfully.`);
    }

    this.themeSubject.next(theme);
  }

  getCurrentTheme(): string {
    return this.themeSubject.value;
  }
}
