import { Component, OnInit, inject, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { ThemeService } from '../../services/theme-service';

import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../services/translation-service';

@Component({
  selector: 'app-navbar',
  imports: [
    TranslatePipe,
    MenubarModule,
    ButtonModule,
    TieredMenuModule
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);

  selectedLang = 'en';

  items: MenuItem[] | undefined;
  userMenuItems: MenuItem[] = [];
  
  username = signal<string>('');
  isDarkMode = signal<boolean>(false);
  themeSubscription!: Subscription;

  ngOnInit() {
    this.username.set(this.authService.getUsernameFromToken());
    this.selectedLang = this.translationService.currentLang();

    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
        this.isDarkMode.set(theme === 'dark');
        this.updateMenu();
    });

    this.items = this.buildMainItems();

    this.updateMenu();
  }

  private buildMainItems(): MenuItem[] {
    return [
      {
        label: this.translate.instant(_('Dashboard')),
        icon: 'pi pi-home',
        routerLink: '/dashboard'
      },
      {
        label: this.translate.instant(_('History')),
        icon: 'pi pi-history',
        routerLink: '/history'
      }
    ];
  }

  updateMenu() {
    this.userMenuItems = [
      {
        label: this.translate.instant(_('Change language')),
        icon: 'pi pi-globe',
        items: [
          {
            label: this.translate.instant(_('English')),
            icon: 'icon-en',
            command: () => this.switch_language('en')
          },
          {
            label: this.translate.instant(_('Czech')),
            icon: 'icon-cz',
            command: () => this.switch_language('cs')
          }
        ]
      },
      {
        label: this.isDarkMode() ? this.translate.instant(_('Light mode')) : this.translate.instant(_('Dark mode')),
        icon: this.isDarkMode() ? 'pi pi-sun' : 'pi pi-moon',
        command: () => this.toggleTheme()
      },
      {
        separator: true
      },
      {
        label: this.translate.instant(_('Logout')),
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  switch_language(lang: string) {
    this.translationService.setLanguage(lang);
    this.selectedLang = this.translationService.currentLang();
    this.items = this.buildMainItems();
    this.updateMenu();
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