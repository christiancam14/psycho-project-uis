import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoHomeComponent } from './psycho-home.component';

describe('PsychoHomeComponent', () => {
  let component: PsychoHomeComponent;
  let fixture: ComponentFixture<PsychoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
