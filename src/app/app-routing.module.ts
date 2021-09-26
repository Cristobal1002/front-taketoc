import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { PagesRoutingModule } from './pages/pages.routing';
import { DashboardRoutingModule } from './pages/dashboard/dashboard.routing';
import { AuthRoutingModule } from './auth/auth.routing';



const routes: Routes = [

  

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true }),
    PagesRoutingModule,
    DashboardRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }