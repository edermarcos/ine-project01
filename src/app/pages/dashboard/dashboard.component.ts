import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  options: IOption[];
  selectedOption: string;

  constructor(private router: Router) {
    this.options = [
      {
        title: 'Módulo de usuarios',
        url: 'https://www.google.com',
      },
      {
        title: 'Modulo de productos',
        url: 'https://www.google.com',
      },
      {
        title: 'Modulo de ventas',
        url: 'https://www.google.com',
      },
    ];
    this.selectedOption = this.options[0].title;
  }

  handleOption(): void {
    console.log(this.selectedOption);
    // this.router.navigate(['dashboard'], { queryParams: { q: option.title } });
  }
}

export interface IOption {
  title: string;
  url: string;
}
