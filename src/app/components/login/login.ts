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
      this.isLoading.set(true);
      this.messages.set([]);

      const { username, password } = this.loginForm.getRawValue();

      this.authService.login(username, password).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/']); 
        },
        error: (err) => {
          this.isLoading.set(false);
          this.messages.set([{ severity: 'error', content: this.translate.instant(_('Invalid username or password.')), closable: false }]);
          console.error('Login error', err);
        }
      });
      this.formSubmitted.set(false);
    }
  }

  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }
}
