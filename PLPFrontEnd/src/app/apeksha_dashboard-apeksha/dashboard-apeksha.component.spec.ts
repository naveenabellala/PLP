import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApekshaComponent } from './dashboard-apeksha.component';

describe('DashboardApekshaComponent', () => {
  let component: DashboardApekshaComponent;
  let fixture: ComponentFixture<DashboardApekshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardApekshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApekshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
