import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  OrderForm: FormGroup

  constructor(private fb: FormBuilder) {

    this.createOrderForm();

  }

  ngOnInit(): void {
  }

  createOrderForm() {

    this.OrderForm = this.fb.group({

    });

  }

}
