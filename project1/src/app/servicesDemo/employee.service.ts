import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// http://127.0.0.1:5500/testServer/data.json

export class EmployeeService {

  constructor() { }

  getEmployeeDetails(): Employee[] {
    return [
      { empName: "vamsi", age: 22 },
      { empName: "Viswa", age: 22 },
      { empName: "subash", age: 22 },
      { empName: "supraja", age: 19 }
    ]
  }
}
