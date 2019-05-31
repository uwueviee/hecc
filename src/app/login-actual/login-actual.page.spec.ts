import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActualPage } from './login-actual.page';

describe('LoginActualPage', () => {
  let component: LoginActualPage;
  let fixture: ComponentFixture<LoginActualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginActualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
