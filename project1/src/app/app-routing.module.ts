import { InnerChild2Component } from './RouterChildExamples/inner-child2/inner-child2.component';
import { InnerChild1Component } from './RouterChildExamples/inner-child1/inner-child1.component';
import { ChildComp2Component } from './RouterChildExamples/child-comp2/child-comp2.component';
import { ChildComp1Component } from './RouterChildExamples/child-comp1/child-comp1.component';
import { ParentComp2Component } from './RouterChildExamples/parent-comp2/parent-comp2.component';
import { ParentComp1Component } from './RouterChildExamples/parent-comp1/parent-comp1.component';
import { PageNotFoundComponent } from './RouterExamples/page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './RouterExamples/employee-details/employee-details.component';
import { EmployeeListComponent } from './RouterExamples/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employeeList', pathMatch: 'full' },
  { path: 'employeeDetails/:empId', component: EmployeeDetailsComponent },
  { path: 'employeeList', component: EmployeeListComponent },


  // child component paths

  {
    path: "parent1",
    component: ParentComp1Component,
    children: [
      {
        path: "child1",
        component: ChildComp1Component,
        children: [
          { path: "c1", component: InnerChild1Component },
          { path: "c2", component: InnerChild2Component }
        ]
      },
      {
        path: "child2",
        component: ChildComp2Component
      }
    ]
  },
  {
    path: "parent2",
    component: ParentComp2Component,
    children: [
      { path: "child1", component: ChildComp1Component },
      { path: "child2", component: ChildComp2Component }
    ]
  },



  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
