import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByViewsComponent } from './sort-by-views.component';

describe('SortByViewsComponent', () => {
  let component: SortByViewsComponent;
  let fixture: ComponentFixture<SortByViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
