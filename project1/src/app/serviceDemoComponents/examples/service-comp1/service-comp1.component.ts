import { TestService } from './../test.service';
import { Employee } from './../../../servicesDemo/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-comp1',
  templateUrl: './service-comp1.component.html',
  styleUrls: ['./service-comp1.component.css']
})
export class ServiceComp1Component implements OnInit {

  // empData: Employee[] = [
  //   { empName: "vamsi", age: 22 },
  //   { empName: "viswa", age: 22 },
  //   { empName: "subash", age: 22 }
  // ]

  empData: Employee[] | undefined;

  constructor(private service: TestService) { }

  ngOnInit(): void {
    // this.empData = this.service.getEmpData();
    this.service.getEmpData().subscribe((data:any)=>{
      this.empData = data;
    })
  }

}
