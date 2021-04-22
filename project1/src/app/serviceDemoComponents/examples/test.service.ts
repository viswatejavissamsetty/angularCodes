import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/servicesDemo/employee';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getEmpData(){
    // return [
    //   { empName: "vamsi", age: 22 },
    //   { empName: "viswa", age: 22 },
    //   { empName: "subash", age: 22 },
    //   { empName: "venkat", "age": 20 }
    // ]
    return this.http.get('assets/data/employeeDetails.json');
  }

}
