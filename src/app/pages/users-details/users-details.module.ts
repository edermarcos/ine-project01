import { RouterModule, Routes } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersDetailsComponent } from './users-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersDetailsComponent,
  },
];

@NgModule({
  declarations: [
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
  ],
  exports: [
    UsersDetailsComponent
  ]
})
export class UsersDetailsModule { }
