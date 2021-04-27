import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerChild2Component } from './inner-child2.component';

describe('InnerChild2Component', () => {
  let component: InnerChild2Component;
  let fixture: ComponentFixture<InnerChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
