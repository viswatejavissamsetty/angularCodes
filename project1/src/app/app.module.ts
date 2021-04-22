import { TestService } from './serviceDemoComponents/examples/test.service';
import { EmployeeService } from './servicesDemo/employee.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { InterpolationBindingComponent } from './bindings/interpolation-binding/interpolation-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { Task2Component } from './examples/task2/task2.component';
import { Task1Component } from './examples/task1/task1.component';
import { EmployeeListComponent } from './RouterExamples/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './RouterExamples/employee-details/employee-details.component';
import { EmployeeSerComponent } from './serviceDemoComponents/employee-ser/employee-ser.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonplaceholderComponent } from './serviceDemoComponents/jsonplaceholder/jsonplaceholder.component';
import { ServiceComp1Component } from './serviceDemoComponents/examples/service-comp1/service-comp1.component';
import { ServiceComp2Component } from './serviceDemoComponents/examples/service-comp2/service-comp2.component';
import { RouterMainComponent } from './RouterExamples/router-main/router-main.component';
import { PageNotFoundComponent } from './RouterExamples/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    PropertyBindingComponent,
    InterpolationBindingComponent,
    EventBindingComponent,
    Task2Component,
    Task1Component,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeSerComponent,
    JsonplaceholderComponent,
    ServiceComp1Component,
    ServiceComp2Component,
    RouterMainComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
