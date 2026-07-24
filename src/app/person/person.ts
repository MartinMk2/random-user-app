import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.html',
  styleUrl: './person.css'
})
export class PersonComponent implements OnInit {
  user: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://randomuser.me/api/').subscribe({
      next: (response: any) => {
        if (response && response.results && response.results.length > 0) {
          this.user = response.results[0];
          console.log('User parsed successfully:', this.user);
        }
      },
      error: (err) => {
        console.error('API Error details:', err);
      }
    });
  }
}
