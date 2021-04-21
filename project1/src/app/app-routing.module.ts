import { EmployeeDetailsComponent } from './RouterExamples/employee-details/employee-details.component';
import { EmployeeListComponent } from './RouterExamples/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent},
  {path: 'details', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
