import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ThemeService } from './theme-service';
import { vi, type Mock } from 'vitest';

describe('ThemeService', () => {
  let service: ThemeService;
  let matchMediaMock: MediaQueryList;
  let mockHtmlElement: HTMLHtmlElement;
  let addClassSpy: Mock<(token: string) => void>;
  let removeClassSpy: Mock<(token: string) => void>;
  let addEventListenerMock: Mock<(type: string, listener: EventListenerOrEventListenerObject | null) => void>;
  let removeEventListenerMock: Mock<(type: string, listener: EventListenerOrEventListenerObject | null) => void>;
  let changeListener: ((event: MediaQueryListEvent) => void) | undefined;
  let prefersDarkMode: boolean;

  beforeEach(() => {
    localStorage.clear();

    mockHtmlElement = document.createElement('html');
    addClassSpy = vi.spyOn(mockHtmlElement.classList, 'add');
    removeClassSpy = vi.spyOn(mockHtmlElement.classList, 'remove');
    vi.spyOn(document, 'querySelector').mockReturnValue(mockHtmlElement);

    addEventListenerMock = vi.fn();
    removeEventListenerMock = vi.fn();
    changeListener = undefined;
    prefersDarkMode = false;

    matchMediaMock = {
      get matches() {
        return prefersDarkMode;
      },
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addEventListener: (type: string, listener: EventListenerOrEventListenerObject | null) => {
        addEventListenerMock(type, listener);
        if (type === 'change' && typeof listener === 'function') {
          changeListener = listener as (event: MediaQueryListEvent) => void;
        }
      },
      removeEventListener: (type: string, listener: EventListenerOrEventListenerObject | null) => {
        removeEventListenerMock(type, listener);
        if (type === 'change' && listener === changeListener) {
          changeListener = undefined;
        }
      },
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(() => false)
    };
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn<typeof window.matchMedia>().mockReturnValue(matchMediaMock)
    });

    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with system preference if no localStorage value exists (light)', () => {
    prefersDarkMode = false;
    service = TestBed.inject(ThemeService);
    
    expect(service.getCurrentTheme()).toBe('light');
    expect(removeClassSpy).toHaveBeenCalledWith('app-dark');
  });

  it('should initialize with system preference if no localStorage value exists (dark)', () => {
    prefersDarkMode = true;
    service = TestBed.inject(ThemeService);
    
    expect(service.getCurrentTheme()).toBe('dark');
    expect(addClassSpy).toHaveBeenCalledWith('app-dark');
  });

  it('should prioritize localStorage preference over system preference', () => {
    localStorage.setItem('themePreference', 'dark');
    prefersDarkMode = false;
    
    service = TestBed.inject(ThemeService);
    
    expect(service.getCurrentTheme()).toBe('dark');
    expect(addClassSpy).toHaveBeenCalledWith('app-dark');
  });

  it('should set theme and update localStorage when requested', () => {
    service = TestBed.inject(ThemeService);
    
    service.setTheme('dark', true);
    
    expect(service.getCurrentTheme()).toBe('dark');
    expect(localStorage.getItem('themePreference')).toBe('dark');
    expect(addClassSpy).toHaveBeenCalledWith('app-dark');
  });

  it('should set theme without updating localStorage if saveUserPreference is false', () => {
    service = TestBed.inject(ThemeService);
    
    service.setTheme('dark', false);
    
    expect(service.getCurrentTheme()).toBe('dark');
    expect(localStorage.getItem('themePreference')).toBeNull();
  });

  it('should update theme when system preference changes (if user has not set a preference)', () => {
    service = TestBed.inject(ThemeService);
    
    expect(addEventListenerMock).toHaveBeenCalled();
    expect(changeListener).toBeDefined();
    
    changeListener?.({ matches: true } as MediaQueryListEvent);
    
    expect(service.getCurrentTheme()).toBe('dark');
    expect(addClassSpy).toHaveBeenCalledWith('app-dark');
  });

  it('should NOT update theme when system preference changes IF user has a saved preference', () => {
    localStorage.setItem('themePreference', 'light');
    service = TestBed.inject(ThemeService);
    
    expect(addEventListenerMock).toHaveBeenCalled();
    expect(changeListener).toBeDefined();
    
    changeListener?.({ matches: true } as MediaQueryListEvent);
    
    expect(service.getCurrentTheme()).toBe('light');
  });
});
