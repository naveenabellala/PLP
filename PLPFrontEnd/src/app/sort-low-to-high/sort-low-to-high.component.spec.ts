import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortLowToHighComponent } from './sort-low-to-high.component';

describe('SortLowToHighComponent', () => {
  let component: SortLowToHighComponent;
  let fixture: ComponentFixture<SortLowToHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortLowToHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortLowToHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
