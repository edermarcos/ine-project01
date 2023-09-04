import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() breadcrumb: string[];

  constructor(private router: Router) {
    this.breadcrumb = [];
  }

  changePage(index: number): void {
    this.router.navigate(['pages', 'dashboard', ...this.breadcrumb.slice(0, index + 1)]);
  }
}
