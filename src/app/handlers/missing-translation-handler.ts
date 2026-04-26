import { inject } from '@angular/core';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  private logger = inject(NGXLogger);

  handle(params: MissingTranslationHandlerParams) {
    const currentLang = params.translateService.getCurrentLang() || 'unknown';
    
    this.logger.warn(`Missing translation for key: '${params.key}' in language: '${currentLang}'`);
    
    return params.key;
  }
}
