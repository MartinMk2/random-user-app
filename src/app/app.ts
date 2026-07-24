import { Component, signal } from '@angular/core';
import { PersonComponent } from './person/person';

@Component({
  selector: 'app-root',
  imports: [PersonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
