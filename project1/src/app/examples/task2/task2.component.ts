import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  name: string = "";

  constructor() {
  }

  ngOnInit(): void {

  }

  tempMethod(t:any) {
    // console.log(t);
    this.name = t.value;
  }

}
