import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-rating';
  nota = 0;

  onClick() {
    this.nota = 1;
  }
}
