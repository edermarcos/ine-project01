import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersTableComponent } from './users-table/users-table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    UsersTableComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    UsersTableComponent,
    BreadcrumbComponent,
  ],
})
export class ComponentsModule {
}
