import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHighToLowComponent } from './sort-high-to-low.component';

describe('SortHighToLowComponent', () => {
  let component: SortHighToLowComponent;
  let fixture: ComponentFixture<SortHighToLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortHighToLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortHighToLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
