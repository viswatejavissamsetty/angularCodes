import { PageNotFoundComponent } from './RouterExamples/page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './RouterExamples/employee-details/employee-details.component';
import { EmployeeListComponent } from './RouterExamples/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employeeList', pathMatch: 'full' },
  { path: 'employeeDetails/:empId', component: EmployeeDetailsComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
