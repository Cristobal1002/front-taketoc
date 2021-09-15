import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { PagesRoutingModule } from "./pages/pages.routing";
import { DashboardRoutingModule } from './pages/dashboard/dashboard.routing';

const routes: Routes = [

    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ];
  
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes, {useHash: true}),
    PagesRoutingModule,
    DashboardRoutingModule
  ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }