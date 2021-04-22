import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { employeeDetails } from 'src/assets/data/employeeDetails';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // empData = [
  //   { empId: 1, empName: "subash", age: 22 },
  //   { empId: 2, empName: "viswa", age: 22 },
  //   { empId: 3, empName: "vamsi", age: 22 },
  //   { empId: 4, empName: "supraja", age: 19 }
  // ]
  empData: any;
  displayData: any | undefined;

  constructor(private aRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.empData = employeeDetails;

    // console.log(this.aRouter.snapshot.queryParams);
    // this.displayData = this.aRouter.snapshot.queryParams;

    let empId = this.aRouter.snapshot.params.empId;

    this.displayData = this.empData.find((data: any) => {
      return data.empId == empId;
    });
  }

  goBack() {
    this.router.navigate(['employeeList']);
  }

}
