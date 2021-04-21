import { EmployeeService } from './../../servicesDemo/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/servicesDemo/employee';

@Component({
  selector: 'app-employee-ser',
  templateUrl: './employee-ser.component.html',
  styleUrls: ['./employee-ser.component.css']
})
export class EmployeeSerComponent implements OnInit {

  empData!: Employee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empData = this.empService.getEmployeeDetails();
  }

}
