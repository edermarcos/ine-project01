import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  path: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.path = this.router.url

  }
}
