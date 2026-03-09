import { Component, OnInit, inject, OnDestroy, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { ThemeService } from '../../services/theme-service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    MenuModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  authService = inject(AuthService);
  router = inject(Router);
  themeService = inject(ThemeService);
  
  items: MenuItem[] | undefined;
  userMenuItems: MenuItem[] = [];
  
  username = signal<string>('');
  isDarkMode = signal<boolean>(false);
  themeSubscription!: Subscription;

  ngOnInit() {
    this.username.set(this.authService.getUsernameFromToken());

    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
        this.isDarkMode.set(theme === 'dark');
        this.updateMenu();
    });

    this.items = [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          routerLink: '/dashboard'
        },
        {
          label: 'History',
          icon: 'pi pi-history',
          routerLink: '/history'
        }
    ];

    this.updateMenu();
  }

  updateMenu() {
    this.userMenuItems = [
      {
        label: this.isDarkMode() ? 'Light mode' : 'Dark mode',
        icon: this.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon',
        command: () => this.toggleTheme()
      },
      {
        separator: true
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  toggleTheme() {
    const newTheme = this.isDarkMode() ? 'light' : 'dark';
    this.themeService.setTheme(newTheme);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
        this.themeSubscription.unsubscribe();
    }
  }
}