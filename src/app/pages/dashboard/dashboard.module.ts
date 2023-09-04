import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'users/:userId',
        loadChildren: () => import('../users-details/users-details.module').then((m) => m.UsersDetailsModule),
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'sales',
        loadChildren: () => import('../sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'stats',
        loadChildren: () => import('../stats/stats.module').then((m) => m.StatsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ComponentsModule],
})
export class DashboardModule {
}
