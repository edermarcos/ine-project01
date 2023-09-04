import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options: IOption[];
  switchOptions = {
    USERS: 'users',
    PRODUCTS: 'products',
    SALES: 'sales',
    STATS: 'stats',
  };
  selectedOption: string = '';
  breadcrumb: string[] = [];

  constructor(
    private router: Router,
  ) {
    this.options = [
      {
        displayText: 'Módulo de usuarios',
        param: this.switchOptions.USERS,
      },
      {
        displayText: 'Modulo de productos',
        param: this.switchOptions.PRODUCTS,
      },
      {
        displayText: 'Modulo de ventas',
        param: this.switchOptions.SALES,
      },
      {
        displayText: 'Modulo de Stats',
        param: this.switchOptions.STATS,
      },
    ];

    this.handlePath(this.router.url)
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handlePath(event.url)
      }
    })
  }

  handlePath(url: string): void {
    this.breadcrumb = url.split('/').slice(3);
    this.selectedOption = this.breadcrumb[0];
  }

  handleOption(): void {
    this.router.navigate(['pages', 'dashboard', this.selectedOption]);
  }
}

export interface IOption {
  displayText: string;
  param: string;
}

