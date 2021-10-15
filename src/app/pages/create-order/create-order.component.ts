import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  //TODO Cambiar, buscar una forma de evitar esto

  ciudades: any[] = [
    {
      value: '0',
      ciudad: 'Seleccione una ciudad'
    },
    {
      value: '1',
      ciudad: 'Bogotá'
    },
    {
      value: '2',
      ciudad: 'Cajicá'
    },
    {
      value: '3',
      ciudad: 'Chia'
    },
    {
      value: '4',
      ciudad: 'Mosquera'
    },
    {
      value: '5',
      ciudad: 'Funza'
    },
    {
      value: '6',
      ciudad: 'Soacha'
    }
  ]

  //Tipo de Pedidos
  tipo = '0'
  tiposPedido: any[] = [
    {
      value: '0',
      tipo: 'Seleccione el tipo de pedido'
    },
    {
      value: '1',
      tipo: 'Entrega'
    },
    {
      value: '2',
      tipo: 'Recogida'
    },
    {
      value: '3',
      tipo: 'Entrega y Recogida'
    },
  ]

  orderForm: FormGroup

  //Propiedades
  detallePedido = [];

  constructor(private fb: FormBuilder) {

    this.createOrderForm();

  }

  ngOnInit(): void {
  }

  // geters para validaciones

  get invalidName() {
    return this.orderForm.get('nombre').invalid && this.orderForm.get('nombre').touched
  }

  get articulos(){
    return this.orderForm.get('articulos') as FormArray;
  }

  createOrderForm() {

    this.orderForm = this.fb.group({
      tipoPedido: [],
      nombre: ['', Validators.required],
      ciudad: [],
      direccion: [],
      telefono: [],
      recaudo: [false],
      valorRecaudar:[0],
      agregar: this.fb.group({
        cantidad: [4],
        descripcion: ['Oli']
      }),

    });

  }

  setTipo(value: string){
    this.tipo = value
  }

  setCiudad(){

  }

  agregarArticulo(){

    let item = this.orderForm.value.agregar 
    this.detallePedido.push(item)
    console.log(this.detallePedido);
  }

  eliminarArticulo(index: number){
    this.detallePedido.splice(index, 1);
  }

  guardarOrden() {
    console.log(this.orderForm);
    if (this.orderForm.invalid) {
      Object.values( this.orderForm.controls).forEach( control => {
        control.markAllAsTouched();
      })
    }
  }

}
