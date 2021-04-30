import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-example',
  templateUrl: './tdf-example.component.html',
  styleUrls: ['./tdf-example.component.css']
})
export class TdfExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(data:any){
    console.log(data);
  }
}
