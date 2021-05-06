import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsComp1Component } from './reactive-forms-comp1.component';

describe('ReactiveFormsComp1Component', () => {
  let component: ReactiveFormsComp1Component;
  let fixture: ComponentFixture<ReactiveFormsComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
