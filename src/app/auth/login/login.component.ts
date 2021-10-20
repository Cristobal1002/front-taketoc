import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  invalidForm = false;
  msgError = 'Espera! Los campos son obligatorios';

  constructor(private router: Router,
    private fb: FormBuilder,
    private accessService: AccessService) {
    this.buildLoginForm();
  }

  ngOnInit(): void {
  }


  // Getters

  get invalidEmail() {
    return this.loginForm.get('user_email').invalid && this.loginForm.get('user_email').touched;
  }

  get invalidPassword() {
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      user_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
    });
  }

  login() {

    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
      this.invalidForm = true
    } else {
      console.log(this.loginForm.value);
      //Toca poner un loading
      this.accessService.login(this.loginForm.value)
      .subscribe(res => {
        //console.log(respuesta);
        if (res.requestData.access === true) {
          console.log(res.requestData,'Éxito el usuario puede acceder');
          this.router.navigateByUrl('/home');
        }else{
          this.invalidForm = true;
          this.msgError = res.requestData.msg
        }
      })
    }

  }

}
