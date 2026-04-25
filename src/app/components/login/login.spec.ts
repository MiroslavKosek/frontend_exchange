import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Mock, vi } from 'vitest';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let mockAuthService: { login: Mock };
  let mockRouter: { navigate: Mock };

  beforeEach(async () => {
    mockAuthService = {
      login: vi.fn()
    };
    
    mockRouter = {
      navigate: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [
        Login
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Form validation (isInvalid)', () => {
    it('should return false if the field is untouched and the form has not been submitted', () => {
      expect(component.isInvalid('username')).toBeFalsy();
    });

    it('should return true if the field is empty (invalid) and the user has clicked on it (touched)', () => {
      const control = component.loginForm.get('username');
      control?.markAsTouched();
      expect(component.isInvalid('username')).toBeTruthy();
    });

    it('should return true if the field is empty and the user has submitted the form', () => {
      component.formSubmitted.set(true);
      expect(component.isInvalid('username')).toBeTruthy();
    });
  });

  describe('Form submission (onSubmit)', () => {
    it('should not call the API if the form is invalid', () => {
      component.onSubmit();
      
      expect(mockAuthService.login).not.toHaveBeenCalled();
      expect(component.formSubmitted()).toBe(true);
    });

    it('should call the API and navigate the user on successful login', () => {
      mockAuthService.login.mockReturnValue(of({ access_token: 'fake-token' }));
      
      component.loginForm.setValue({ username: 'admin', password: 'password123' });
      
      component.onSubmit();

      expect(mockAuthService.login).toHaveBeenCalledWith('admin', 'password123');
      expect(component.isLoading()).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
      expect(component.formSubmitted()).toBe(false);
    });

    it('should catch the error from the API, display a message, and not redirect', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {/* no-op to suppress error logs during testing */});
      
      mockAuthService.login.mockReturnValue(throwError(() => new Error('Auth failed')));
      
      component.loginForm.setValue({ username: 'admin', password: 'wrong-password' });
      
      component.onSubmit();

      expect(mockAuthService.login).toHaveBeenCalledWith('admin', 'wrong-password');
      expect(component.isLoading()).toBe(false);

      expect(component.messages()).toEqual([{ severity: 'error', content: 'Invalid username or password.', closable: false }]);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalled();
      expect(component.formSubmitted()).toBe(false);
    });
  });

  describe('HTML Template Rendering', () => {
    it('should display error messages under invalid fields', () => {
      component.formSubmitted.set(true);
      
      fixture.detectChanges(); 
      
      const compiled = fixture.nativeElement as HTMLElement;
      
      expect(compiled.textContent).toContain('Username is required.');
      expect(compiled.textContent).toContain('Password is required.');
    });

    it('should display messages from the API', () => {
      component.messages.set([
        { severity: 'error', content: 'Test message', closable: true }
      ]);
      
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Test message');
    });
  });
});
