import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComp2Component } from './parent-comp2.component';

describe('ParentComp2Component', () => {
  let component: ParentComp2Component;
  let fixture: ComponentFixture<ParentComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
