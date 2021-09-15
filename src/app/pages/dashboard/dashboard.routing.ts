import { Router } from "@angular/router";

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { StoresComponent } from "./stores/stores.component";



const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'admin-dashboard',
          component: AdminComponent,
          data: {
            title: 'Dashboard Administrador',
            urls: [{ title: 'Dashboard', url: '/dashboard/admin-dashboard' }, { title: 'Dashboard Administrador' }]
          }
        },
        {
          path: 'store-dashboard',
          component: StoresComponent,
          data: {
            title: 'Dashboard Ventas',
            urls: [{ title: 'Dashboard', url: '/dashboard/admin-dashboard' }, { title: 'Dashboard Ventas' }]
          }
        }
      ]
    }
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
