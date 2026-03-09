import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject<Object>(PLATFORM_ID);

  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }
  }

  private initTheme() {
    const storedTheme = localStorage.getItem('themePreference');
    
    const prefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (storedTheme) {
      this.setTheme(storedTheme, false);
    } else {
      this.setTheme(prefersDarkMedia.matches ? 'dark' : 'light', false);
    }

    prefersDarkMedia.addEventListener('change', (e) => {
      if (!localStorage.getItem('themePreference')) {
        this.setTheme(e.matches ? 'dark' : 'light', false);
      }
    });
  }

  setTheme(theme: string, saveUserPreference: boolean = true) {
    this.themeSubject.next(theme);

    if (isPlatformBrowser(this.platformId)) {
      if (saveUserPreference) {
        localStorage.setItem('themePreference', theme);
      }

      const element = document.querySelector('html');

      if (theme === 'light') {
        element?.classList.remove('app-dark');
      } else {
        element?.classList.add('app-dark');
      }
    }
  }

  getCurrentTheme(): string {
    return this.themeSubject.value;
  }
}