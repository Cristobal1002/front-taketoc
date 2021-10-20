import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AuthRoutingModule } from './auth.routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, RecoveryComponent],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
