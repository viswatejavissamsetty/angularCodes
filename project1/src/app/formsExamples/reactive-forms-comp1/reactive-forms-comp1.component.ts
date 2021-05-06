import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { passwordCheckValidator } from '../validations/validator';

@Component({
  selector: 'app-reactive-forms-comp1',
  templateUrl: './reactive-forms-comp1.component.html',
  styleUrls: ['./reactive-forms-comp1.component.css']
})
export class ReactiveFormsComp1Component implements OnInit {

  formData!: FormGroup;
  ageS: number | null = null;
  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
      rPassword: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl('')
    }, {validators: passwordCheckValidator})
  }

  get userName() {
    return this.formData.get('userName')
  }

  get password() {
    return this.formData.get('password')
  }

  get rPassword() {
    return this.formData.get('rPassword')
  }

  get age() {
    return this.formData.get('age')
  }

  get gender() {
    return this.formData.get('gender')
  }

  toggleActivation(card: HTMLElement) {
    card.classList.toggle('shadow')
  }

  submitData() {
    console.log(this.formData.value);
  }
}
