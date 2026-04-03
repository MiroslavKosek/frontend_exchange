import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme-service';
import { TranslationService } from './services/translation-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private translationService = inject(TranslationService);
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.translationService.initialize();
  }

}
