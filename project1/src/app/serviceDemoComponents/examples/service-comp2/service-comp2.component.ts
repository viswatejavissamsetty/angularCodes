import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/servicesDemo/employee';

@Component({
  selector: 'app-service-comp2',
  templateUrl: './service-comp2.component.html',
  styleUrls: ['./service-comp2.component.css']
})
export class ServiceComp2Component implements OnInit {

  // empData: Employee[] = [
  // { empName: "vamsi", age: 22 },
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
