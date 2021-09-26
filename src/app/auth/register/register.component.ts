import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.registerForm = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['', [Validators.required]],
      phone:['',[Validators.required]],
      password:['', [Validators.required, Validators.minLength(6)] ]
    });
  }
  

  toggleEye: boolean = true;
  
  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';

		
	}

}
