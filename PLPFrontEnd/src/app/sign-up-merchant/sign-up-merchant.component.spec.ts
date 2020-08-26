import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMerchantComponent } from './sign-up-merchant.component';

describe('SignUpMerchantComponent', () => {
  let component: SignUpMerchantComponent;
  let fixture: ComponentFixture<SignUpMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
