import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// http://127.0.0.1:5500/testServer/data.json

export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): any {
    // return [
    //   { empName: "vamsi", age: 22 },
    //   { empName: "Viswa", age: 22 },
    //   { empName: "subash", age: 22 },
    //   { empName: "supraja", age: 19 }
    // ]
    return this.http.get("http://127.0.0.1:5500/testServer/data.json");
  }

  getJsonPlaceHolderData(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
