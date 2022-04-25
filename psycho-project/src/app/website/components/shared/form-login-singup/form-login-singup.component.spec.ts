import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginSingupComponent } from './form-login-singup.component';

describe('FormLoginSingupComponent', () => {
  let component: FormLoginSingupComponent;
  let fixture: ComponentFixture<FormLoginSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginSingupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
