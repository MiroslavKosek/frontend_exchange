import { TestBed } from '@angular/core/testing';
import { MissingTranslationHandlerParams } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { Mock, vi } from 'vitest';

import { CustomMissingTranslationHandler } from './missing-translation-handler';

describe('CustomMissingTranslationHandler', () => {
  let mockLogger: { warn: Mock };

  beforeEach(() => {
    mockLogger = {
      warn: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [{ provide: NGXLogger, useValue: mockLogger }]
    });
  });

  function createParams(key: string, currentLang?: string): MissingTranslationHandlerParams {
    return {
      key,
      interpolateParams: undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      translateService: { getCurrentLang: () => currentLang } as any
    };
  }

  it('should return the translation key and log current language', () => {
    const handler = TestBed.runInInjectionContext(() => new CustomMissingTranslationHandler());

    const result = handler.handle(createParams('dashboard.title', 'cs'));

    expect(result).toBe('dashboard.title');
    expect(mockLogger.warn).toHaveBeenCalledWith("Missing translation for key: 'dashboard.title' in language: 'cs'");
  });

  it('should fallback to unknown language when current language is missing', () => {
    const handler = TestBed.runInInjectionContext(() => new CustomMissingTranslationHandler());

    const result = handler.handle(createParams('history.empty', undefined));

    expect(result).toBe('history.empty');
    expect(mockLogger.warn).toHaveBeenCalledWith("Missing translation for key: 'history.empty' in language: 'unknown'");
  });
});
