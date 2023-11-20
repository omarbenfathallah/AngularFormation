import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  registerForm!: FormGroup;
  name = new FormControl('')
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastname: new FormControl('', Validators.required),
        address: new FormGroup({
          street: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required)
        })
      })
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
}
