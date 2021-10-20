import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Pedido } from '../interfaces/order.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpService: HttpService) { }

  createOrder(pedido: Pedido){
    return this.httpService.makePost('/api/order', pedido)
    .pipe(
      tap( (res:any) => {
        console.log(res);
      })
    )
  }
}
