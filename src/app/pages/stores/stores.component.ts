import { Component, OnInit } from '@angular/core';

interface Store {
  nombre: string;
  documentNumber: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  email: string;
  estatus: boolean;
}

const stores: Store[] = [
  {
    nombre: "Ideas Colombia SAS",
    documentNumber: "901.971.654-7",
    ciudad: "Bogotá",
    direccion: "Calle 36 # 1 - 35",
    telefono: "316 5121606",
    email: "ideas@gmail.com",
    estatus: true
  },
  {
    nombre: "Ideas Colombia SAS",
    documentNumber: "901.971.654-7",
    ciudad: "Bogotá",
    direccion: "Calle 36 # 1 - 35",
    telefono: "316 5121606",
    email: "ideas@gmail.com",
    estatus: true
  },
  {
    nombre: "Ideas Colombia SAS",
    documentNumber: "901.971.654-7",
    ciudad: "Bogotá",
    direccion: "Calle 36 # 1 - 35",
    telefono: "316 5121606",
    email: "ideas@gmail.com",
    estatus: true
  },
  {
    nombre: "Ideas Colombia SAS",
    documentNumber: "901.971.654-7",
    ciudad: "Bogotá",
    direccion: "Calle 36 # 1 - 35",
    telefono: "316 5121606",
    email: "ideas@gmail.com",
    estatus: true
  },
  {
    nombre: "Ideas Colombia SAS",
    documentNumber: "901.971.654-7",
    ciudad: "Bogotá",
    direccion: "Calle 36 # 1 - 35",
    telefono: "316 5121606",
    email: "ideas@gmail.com",
    estatus: true
  }
]

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  //Controles
  crearTienda = false;

  //
  
  page = 1;
  pageSize = 4;
  collectionSize = stores.length;
  tiendas: Store[];

  constructor() {
    this.refreshStores()
   }

  ngOnInit(): void {
  }

  refreshStores() {
    this.tiendas = stores
      .map((tienda, i) => ({id: i + 1, ...tienda}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
