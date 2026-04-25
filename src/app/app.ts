import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme-service';
import { TranslationService } from './services/translation-service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private translationService = inject(TranslationService);
  private themeService = inject(ThemeService);
  private logger = inject(NGXLogger);

  ngOnInit() {
    this.logger.info('App component initialized. Bootstrapping services.');
    this.translationService.initialize();
  }

}
