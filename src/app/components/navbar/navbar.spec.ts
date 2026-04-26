import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Router } from '@angular/router';
import { Navbar } from './navbar';
import { AuthService } from '../../services/auth-service';
import { ThemeService } from '../../services/theme-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mock, vi } from 'vitest';

describe('Navbar Component', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let mockAuthService: { getUsernameFromToken: Mock; logout: Mock };
  let mockThemeService: { theme$: Observable<string>; setTheme: Mock };
  let router: Router;
  let themeSubject: BehaviorSubject<string>;

  beforeEach(async () => {
    themeSubject = new BehaviorSubject<string>('light');

    mockAuthService = {
      getUsernameFromToken: vi.fn().mockReturnValue('testAdmin'),
      logout: vi.fn()
    };

    mockThemeService = {
      theme$: themeSubject.asObservable(),
      setTheme: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [
        Navbar,
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: AuthService, useValue: mockAuthService },
        { provide: ThemeService, useValue: mockThemeService }
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    vi.spyOn(router, 'navigate').mockResolvedValue(true);

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;

    fixture.detectChanges(); 
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be created and load the username from the token', () => {
    expect(component).toBeTruthy();
    expect(mockAuthService.getUsernameFromToken).toHaveBeenCalled();
    expect(component.username()).toBe('testAdmin');
  });

  describe('Theme and Menu', () => {
    it('should set isDarkMode to false and update the menu when the theme is light', () => {
      expect(component.isDarkMode()).toBe(false);

      expect(component.userMenuItems[1].label).toBe('Dark mode');
      expect(component.userMenuItems[1].icon).toBe('pi pi-moon');
    });

    it('should set isDarkMode to true and update the menu when the theme is dark', () => {
      themeSubject.next('dark');
      fixture.detectChanges(); 

      expect(component.isDarkMode()).toBe(true);
      expect(component.userMenuItems[1].label).toBe('Light mode');
      expect(component.userMenuItems[1].icon).toBe('pi pi-sun');
    });

    it('should call setTheme with "dark" when toggleTheme() is called from light mode', () => {
      component.toggleTheme();
      expect(mockThemeService.setTheme).toHaveBeenCalledWith('dark');
    });

    it('should call setTheme with "light" when toggleTheme() is called from dark mode', () => {
      component.isDarkMode.set(true);
      
      component.toggleTheme();
      expect(mockThemeService.setTheme).toHaveBeenCalledWith('light');
    });
    
    it('should call toggleTheme when clicking the theme item in the menu', () => {
      const toggleSpy = vi.spyOn(component, 'toggleTheme');
      const themeMenuItem = component.userMenuItems[1];
      
      if (themeMenuItem.command) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        themeMenuItem.command({} as any);
      }
      
      expect(toggleSpy).toHaveBeenCalled();
    });
  });

  describe('Logout', () => {
    it('should call logout on authService and navigate to login', () => {
      component.logout();

      expect(mockAuthService.logout).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
    
    it('should call logout when clicking the logout item in the menu', () => {
      const logoutSpy = vi.spyOn(component, 'logout');
      const logoutMenuItem = component.userMenuItems[3]; 
      
      if (logoutMenuItem.command) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        logoutMenuItem.command({} as any);
      }
      
      expect(logoutSpy).toHaveBeenCalled();
    });
  });

  describe('Lifecycle', () => {
    it('should unsubscribe from themeSubscription in ngOnDestroy', () => {
      const unsubscribeSpy = vi.spyOn(component.themeSubscription, 'unsubscribe');
      
      component.ngOnDestroy();
      
      expect(unsubscribeSpy).toHaveBeenCalled();
    });
  });

  describe('HTML Rendering', () => {
     it('should display the user name on the profile button', () => {
         const compiled = fixture.nativeElement as HTMLElement;
         const buttonLabel = compiled.querySelector('.p-button-label');
         expect(buttonLabel?.textContent).toContain('testAdmin');
     });
  });
});
