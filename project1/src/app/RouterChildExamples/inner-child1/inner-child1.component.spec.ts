import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerChild1Component } from './inner-child1.component';

describe('InnerChild1Component', () => {
  let component: InnerChild1Component;
  let fixture: ComponentFixture<InnerChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
