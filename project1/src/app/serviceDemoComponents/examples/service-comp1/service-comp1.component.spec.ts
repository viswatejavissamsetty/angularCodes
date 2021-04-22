import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComp1Component } from './service-comp1.component';

describe('ServiceComp1Component', () => {
  let component: ServiceComp1Component;
  let fixture: ComponentFixture<ServiceComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
