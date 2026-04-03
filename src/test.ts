import 'vitest-canvas-mock';
import { beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';

// Stub ResizeObserver used by Chart.js for responsive charts (not implemented in jsdom).
if (typeof ResizeObserver === 'undefined') {
  (window as Window & typeof globalThis & { ResizeObserver: unknown }).ResizeObserver = class {
    observe() { /* no-op */ }
    unobserve() { /* no-op */ }
    disconnect() { /* no-op */ }
  };
}

// Provide browser APIs expected by UI libraries when running in jsdom.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => { /* no-op */ },
      removeListener: () => { /* no-op */ },
      addEventListener: () => { /* no-op */ },
      removeEventListener: () => { /* no-op */ },
      dispatchEvent: () => false,
    }),
  });
}

beforeEach(() => {
  const langChange = new Subject();
  const translationChange = new Subject();
  const defaultLangChange = new Subject();
  const fallbackLangChange = new Subject();

  TestBed.configureTestingModule({
    providers: [
      {
        provide: TranslateService,
        useValue: {
          instant: (key: string) => key,
          get: (key: string) => of(key),
          stream: (key: string) => of(key),
          getStreamOnTranslationChange: (key: string) => of(key),
          use: () => undefined,
          setDefaultLang: () => undefined,
          setFallbackLang: () => undefined,
          getBrowserLang: () => 'en',
          getCurrentLang: () => 'en',
          currentLang: 'en',
          onLangChange: langChange.asObservable(),
          onTranslationChange: translationChange.asObservable(),
          onFallbackLangChange: fallbackLangChange.asObservable(),
          onDefaultLangChange: defaultLangChange.asObservable()
        }
      }
    ]
  });
});
