import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailIndexComponent } from './mail-index.component';

describe('MailIndexComponent', () => {
  let component: MailIndexComponent;
  let fixture: ComponentFixture<MailIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
