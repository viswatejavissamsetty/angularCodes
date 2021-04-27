import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComp1Component } from './parent-comp1.component';

describe('ParentComp1Component', () => {
  let component: ParentComp1Component;
  let fixture: ComponentFixture<ParentComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
