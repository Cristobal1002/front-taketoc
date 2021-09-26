import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { StoresComponent } from './stores/stores.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'create-order', component: CreateOrderComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
