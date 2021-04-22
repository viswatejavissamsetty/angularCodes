import { EmployeeDetailsComponent } from './RouterExamples/employee-details/employee-details.component';
import { EmployeeListComponent } from './RouterExamples/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employeeDetails', component: EmployeeDetailsComponent },
  { path: 'employeeList', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
