import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }


  registerForm!:FormGroup;

  ngOnInit(){
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl('')
      })
    });
  }

  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.registerForm.value,null,4))
  }
  reset(){
    this.registerForm.reset();
  }

  

}
