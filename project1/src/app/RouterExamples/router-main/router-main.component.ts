import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-main',
  templateUrl: './router-main.component.html',
  styleUrls: ['./router-main.component.css']
})
export class RouterMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("name", "viswa");
    localStorage.setItem("age", "22");
    localStorage.setItem("gender", "Male");
  }

}
