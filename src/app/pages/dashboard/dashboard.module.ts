import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
   imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class DashboardModule {}
