import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  value: number = 0;
  
  constructor() {
    // this.value = 0;
  }

  ngOnInit(): void {
  }

  changeValue(order: number) {
    this.value = this.value + order;
    // 0 + (1)
    // 0 + (-1)
  }

  increaseValue(){
    this.value++;
  }

  decreaseValue(){
    this.value--;
  }
}
