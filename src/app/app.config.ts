import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';

import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import {
  provideTranslateService,
  MissingTranslationHandler,
} from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustomMissingTranslationHandler } from './handlers/missing-translation-handler';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { TranslationService } from './services/translation-service';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { environment } from '../environments/environment';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
    },
  },
});

registerLocaleData(localeCs);

function getPrefix(): string {
  let baseHref = document.querySelector('base')?.getAttribute('href') || '/';

  if (!baseHref.endsWith('/')) {
    baseHref += '/';
  }

  return `${baseHref}i18n/`;
}

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, primeng, another-css-library',
          },
        },
      },
    }),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: getPrefix(),
        suffix: '.json',
      }),
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
      },
    }),
    {
      provide: LOCALE_ID,
      deps: [TranslationService],
      useFactory: (translationService: TranslationService) => translationService.getAngularLocale()
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(
      LoggerModule.forRoot({
        level: NgxLoggerLevel.DEBUG,
        serverLogLevel: NgxLoggerLevel.ERROR,
        serverLoggingUrl: `${environment.apiUrl}/api/logs`,
        disableConsoleLogging: environment.production
      })
    )]
};
