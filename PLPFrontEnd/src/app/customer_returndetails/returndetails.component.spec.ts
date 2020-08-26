import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturndetailsComponent } from './returndetails.component';

describe('ReturndetailsComponent', () => {
  let component: ReturndetailsComponent;
  let fixture: ComponentFixture<ReturndetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturndetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
