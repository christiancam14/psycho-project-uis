import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistLayoutComponent } from './psychologist-layout.component';

describe('PsychologistLayoutComponent', () => {
  let component: PsychologistLayoutComponent;
  let fixture: ComponentFixture<PsychologistLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologistLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
