import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  name: string | null = "";

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
  }

}
