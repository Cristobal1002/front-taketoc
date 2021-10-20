import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  //Datepicker
  model: NgbDateStruct;
  date: { year: number, month: number };
  

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

  categorias: any[] = [
    {
      tipo: "Same Day"
    },
    {
      tipo: "Next Day"
    },
    {
      tipo: "Custom Day"
    }

  ]

  orderForm: FormGroup

  //Propiedades
  detallePedido = [];

  constructor(private fb: FormBuilder,
    private calendar: NgbCalendar) {
      this.selectToday();
    this.createOrderForm();

  }

  ngOnInit(): void { 
    
  }
  

  // geters para validaciones

  get invalidName() {
    return this.orderForm.get('customer_name').invalid && this.orderForm.get('customer_name').touched
  }

  get articulos() {
    return this.orderForm.get('articulos') as FormArray;
  }

 

  createOrderForm() {

    this.orderForm = this.fb.group({
      order_type: [],
      order_category: [],
      date_delivery: [this.setDate()],
      pickup_remarks: [],
      customer_name: ['', Validators.required],
      delivery_city: [],
      customer_address: [],
      customer_phone: [],
      have_payment: [false],
      payment_amount: [0],
      order_detail: [this.detallePedido],
      pending_marks: [],
      order_status: 'En Bodega',
      agregar: this.fb.group({
        cantidad: [],
        descripcion: ['']
      })

    });

  }

  /**Calendario
   * 
   */

  isDisabled = (date: NgbDate, current: { month: number, year: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  setDate(){
    const {day, month, year } = this.model;
    return  `${day}/${month}/${year}`
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  agregarArticulo() {

    let item = this.orderForm.value.agregar
    this.detallePedido.push(item)
    console.log(this.detallePedido);
  }

  eliminarArticulo(index: number) {
    this.detallePedido.splice(index, 1);
    console.log(this.detallePedido);
  }

  guardarOrden() {
    console.log(this.orderForm);
    if (this.orderForm.invalid) {
      Object.values(this.orderForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
  }

}
