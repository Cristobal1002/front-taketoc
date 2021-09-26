import { Component, OnInit } from '@angular/core';

interface Order {
  id: number;
  tienda: string;
  fechaOrden: string;
  ciudad: string;
  cliente: string;
  tipoOrden: string;
  estado: string

}

const orders: Order[] = [

  {
    id: 10554,
    tienda: 'Ideas Colombia SAS',
    fechaOrden: '16/09/2021 - 10:00 AM',
    ciudad: 'Bogotá',
    cliente: 'Manuel Pelayo',
    tipoOrden: 'Same Day',
    estado: 'En Bodega'
  },
  {
    id: 10555,
    tienda: 'Ideas Colombia SAS',
    fechaOrden: '15/09/2021 - 10:05 AM',
    ciudad: 'Bogotá',
    cliente: 'Estella Artois',
    tipoOrden: 'Next Day',
    estado: 'Despachado'
  },
  {
    id: 10556,
    tienda: 'Ideas Colombia SAS',
    fechaOrden: '16/09/2021 - 10:00 AM',
    ciudad: 'Bogotá',
    cliente: 'Noe Cogido',
    tipoOrden: 'Same day',
    estado: 'En Bodega'
  },
  {
    id: 10557,
    tienda: 'Ideas Colombia SAS',
    fechaOrden: '16/09/2021 - 10:32 AM',
    ciudad: 'Bogotá',
    cliente: 'Francisned Quintero',
    tipoOrden: 'Same day',
    estado: 'En Bodega'
  },
  {
    id: 10558,
    tienda: 'Ideas Colombia SAS',
    fechaOrden: '16/09/2021 - 10:00 AM',
    ciudad: 'Bogotá',
    cliente: 'Manuel Alvarez',
    tipoOrden: 'Same day',
    estado: 'En Bodega'
  },
  {
    id: 10559,
    tienda: 'Ideas Colombia SAS',
    fechaOrden: '16/09/2021 - 11:00 AM',
    ciudad: 'Bogotá',
    cliente: 'Manuel Pelayo',
    tipoOrden: 'Same day',
    estado: 'En Bodega'
  }
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = orders.length;
  ordenes: Order[];

  constructor() {
    this.refreshCountries();
   }

  refreshCountries() {
    this.ordenes = orders
      .map((orden, i) => ({id: i + 1, ...orden}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

}
