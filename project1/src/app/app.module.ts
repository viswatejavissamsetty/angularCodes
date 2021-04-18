import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { PropertyBindingComponent } from './bindings/property-binding/property-binding.component';
import { InterpolationBindingComponent } from './bindings/interpolation-binding/interpolation-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    PropertyBindingComponent,
    InterpolationBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
