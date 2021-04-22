import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import employeeDetails from '../../../assets/data/employeeDetails.json';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empData = [
    { empId: 1, empName: "subash", age: 22 },
    { empId: 2, empName: "viswa", age: 22 },
    { empId: 3, empName: "vamsi", age: 22 },
    { empId: 4, empName: "supraja", age: 19 }
  ]

  displayData: any | undefined;

  constructor(private aRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(employeeDetails);
    

    let empId = this.aRouter.snapshot.params.empId;
    // this.displayData = empId;
    // console.log(this.empData.find((data) => { 
    //   return data.empId == empId;
    // }));
    this.displayData = this.empData.find((data) => {
      return data.empId == empId;
    });
  }

  goBack() {
    this.router.navigate(['employeeList']);
  }

}
