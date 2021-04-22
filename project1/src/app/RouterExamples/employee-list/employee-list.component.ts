import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeDetails } from 'src/assets/data/employeeDetails'; // importing from asserts
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // empData = [
  //   { empId: 1, empName: "subash", age: 22 },
  //   { empId: 2, empName: "viswa", age: 22 },
  //   { empId: 3, empName: "vamsi", age: 22 },
  //   { empId: 4, empName: "supraja", age: 19 }
  // ]
  empData:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.empData = employeeDetails;
  }

  getDetails(emp: any) {
    // console.log(emp);
    this.router.navigate(['employeeDetails', emp.empId]); //{"Id": emp.empId}, , {queryParams: emp}
    // this.router.navigateByUrl('employeeDetails/' + emp.empId);
  }

}
