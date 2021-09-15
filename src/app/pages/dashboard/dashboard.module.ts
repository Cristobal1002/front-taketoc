import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StoresComponent } from './stores/stores.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    StoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
