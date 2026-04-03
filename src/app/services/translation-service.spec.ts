import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { TranslationService } from './translation-service';

describe('TranslationService', () => {
	let service: TranslationService;
	const translateMock = {
		use: vi.fn(),
		setFallbackLang: vi.fn(),
		getBrowserLang: vi.fn().mockReturnValue('en')
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TranslationService,
				{ provide: TranslateService, useValue: translateMock }
			]
		});

		service = TestBed.inject(TranslationService);
		sessionStorage.clear();
	});

	afterEach(() => {
		vi.clearAllMocks();
		sessionStorage.clear();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should initialize and set default language', () => {
		service.initialize();

		expect(translateMock.setFallbackLang).toHaveBeenCalledWith('en');
		expect(translateMock.use).toHaveBeenCalledWith('en');
	});

	it('should persist normalized language to session storage', () => {
		service.setLanguage('cs-CZ');

		expect(service.currentLang()).toBe('cs');
		expect(sessionStorage.getItem('lang')).toBe('cs');
	});
});
