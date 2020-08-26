import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantloginComponent } from './merchantlogin.component';

describe('MerchantloginComponent', () => {
  let component: MerchantloginComponent;
  let fixture: ComponentFixture<MerchantloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
