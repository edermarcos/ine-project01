import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DetailsModule {}
