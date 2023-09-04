import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./details/details.module').then((m) => m.DetailsModule),
      }
    ]
  },
];

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
