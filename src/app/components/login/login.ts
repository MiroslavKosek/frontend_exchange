import { Component, inject, signal } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule,
    InputGroupModule,
    InputGroupAddonModule
],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private translate = inject(TranslateService);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private logger = inject(NGXLogger);

  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  isLoading = signal<boolean>(false);
  messages = signal<{
    severity: "success" | "info" | "warn" | "error" | "secondary" | "contrast" | null | undefined;
    content: string;
    closable: boolean;
  }[]>([]);
  formSubmitted = signal<boolean>(false);
  
  onSubmit() {
    this.formSubmitted.set(true);

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.getRawValue();

      this.logger.info(`Login form submitted for user: '${username}'`);

      this.isLoading.set(true);
      this.messages.set([]);

      this.authService.login(username, password).subscribe({
        next: () => {
          this.logger.info(`Login UI flow successful for '${username}'. Redirecting to root.`);
          this.isLoading.set(false);
          this.router.navigate(['/']); 
        },
        error: (err) => {
          this.logger.error(`Login UI flow failed for user: '${username}'. Displaying error message.`, err);
          this.isLoading.set(false);

          let errorMessageKey: string = _('Invalid username or password.');
          
          if (err.status === 0) {
            errorMessageKey = _('Server is unreachable. Please check your connection or try again later.');
          } else if (err.status >= 500) {
            errorMessageKey = _('An internal server error occurred. Please try again later.');
          }

          this.messages.set([{ 
            severity: 'error', 
            content: this.translate.instant(errorMessageKey), 
            closable: false 
          }]);
        }
      });
      this.formSubmitted.set(false);
    } else {
      this.logger.warn('Login attempt blocked: Form submitted with invalid validation state.');
    }
  }

  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }
}
