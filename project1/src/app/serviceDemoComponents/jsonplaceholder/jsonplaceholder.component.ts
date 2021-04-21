import { EmployeeService } from './../../servicesDemo/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css']
})
export class JsonplaceholderComponent implements OnInit {

  data: any;

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getJsonPlaceHolderData().subscribe((data)=>{
      this.data = data;
    })
  }

}
