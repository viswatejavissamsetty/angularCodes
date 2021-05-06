import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsComp2Component } from './reactive-forms-comp2.component';

describe('ReactiveFormsComp2Component', () => {
  let component: ReactiveFormsComp2Component;
  let fixture: ComponentFixture<ReactiveFormsComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
