import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { passwordCheckValidator } from '../validations/validator';

@Component({
  selector: 'app-reactive-forms-comp2',
  templateUrl: './reactive-forms-comp2.component.html',
  styleUrls: ['./reactive-forms-comp2.component.css']
})
export class ReactiveFormsComp2Component implements OnInit {
  formData!: FormGroup;
  ageS: number | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      userName: [''],
      password: [''],
      rPassword: [''],
      age: [''],
      gender: ['']
    }, { validators: passwordCheckValidator })
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
