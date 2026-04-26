import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-layout',
  imports: [
    Navbar,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  private logger = inject(NGXLogger);
  
  ngOnInit() {
    this.logger.trace('Main layout wrapper initialized.');
  }
}
