import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComp2Component } from './service-comp2.component';

describe('ServiceComp2Component', () => {
  let component: ServiceComp2Component;
  let fixture: ComponentFixture<ServiceComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
