import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyProductsComponent } from './third-party-products.component';

describe('ThirdPartyProductsComponent', () => {
  let component: ThirdPartyProductsComponent;
  let fixture: ComponentFixture<ThirdPartyProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
