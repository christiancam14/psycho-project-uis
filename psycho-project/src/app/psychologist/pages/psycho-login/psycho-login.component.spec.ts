import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoLoginComponent } from './psycho-login.component';

describe('PsychoLoginComponent', () => {
  let component: PsychoLoginComponent;
  let fixture: ComponentFixture<PsychoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
