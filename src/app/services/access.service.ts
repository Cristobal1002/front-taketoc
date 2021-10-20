import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { LoginForm } from '../interfaces/login-form.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private httpService: HttpService,
    private router: Router) { }

  login(formData: LoginForm) {

    return this.httpService.makePost('/api/auth/login', formData)
      .pipe(
        tap((res: any) => {

          if (res.requestData.access) {
            console.log(res);
            localStorage.setItem('token', res.requestData.token);
            sessionStorage.setItem('user_name', res.requestData.usuario.user_name);
            sessionStorage.setItem('user', res.requestData.usuario.uid);
            sessionStorage.setItem('business', res.requestData.usuario.business);
          }


        })
      );
  }

}
