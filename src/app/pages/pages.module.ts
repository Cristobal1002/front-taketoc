import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { ElementsModule } from '../elements/elements.module';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ElementsModule
  ]
})
export class PagesModule { }
