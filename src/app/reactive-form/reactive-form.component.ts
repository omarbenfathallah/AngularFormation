import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  errorMsgString: string = '';
  errorMsgNumber: string ='';
  errorMsgNull: string ='';

  //name = new FormControl('',Validators.required)

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
  }

}