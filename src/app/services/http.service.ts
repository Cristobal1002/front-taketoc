import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  makePost(endpoint: string, data: any, headers: HttpHeaders = this.postDefaultHeaders()): Observable<any> {
    return this.http.post(environment.apiUrl + endpoint, data, { headers })
      .pipe(catchError(err => {
        console.log(err);
        return err
      }))

  }

  postDefaultHeaders(): HttpHeaders {
    let token =  localStorage.getItem('token');
    !token ? token = '' : token;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'POST')
      .append('x-token', token );
    return headers;
  }

}
