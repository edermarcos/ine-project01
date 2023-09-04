import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  param: string;

  constructor(private route: ActivatedRoute) {
    this.param = this.route.snapshot.paramMap.get('id') as string

    console.log(this.param)
  }

}
