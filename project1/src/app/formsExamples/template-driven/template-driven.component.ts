import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  formx = {
    username: ""
  }

  constructor() { }

  ngOnInit(): void {
  }


  test(data:any){
    console.log(data);
  }
}
