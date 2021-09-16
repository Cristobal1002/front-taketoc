import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MetismenuAngularModule } from '@metismenu/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    NavHeaderComponent,
    NavigationComponent,
    LoadingComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    NavHeaderComponent,
    NavigationComponent,
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    NgbModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
    MetismenuAngularModule
  ]
})
export class ElementsModule { }
