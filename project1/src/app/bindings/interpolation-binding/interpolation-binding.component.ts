import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {

  name: string;
  age: number = 22;
  gender: string = "M";

  constructor() {
    this.name = "vamsi";
  }

  ngOnInit(): void {
  }

}
