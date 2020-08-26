import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByPriceRangeComponent } from './sort-by-price-range.component';

describe('SortByPriceRangeComponent', () => {
  let component: SortByPriceRangeComponent;
  let fixture: ComponentFixture<SortByPriceRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByPriceRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
