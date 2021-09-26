import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { ElementsModule } from '../elements/elements.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoresComponent } from './stores/stores.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    StoresComponent,
    CreateOrderComponent,
    ManageUsersComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ElementsModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
