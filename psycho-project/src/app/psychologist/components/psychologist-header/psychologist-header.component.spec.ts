import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistHeaderComponent } from './psychologist-header.component';

describe('PsychologistHeaderComponent', () => {
  let component: PsychologistHeaderComponent;
  let fixture: ComponentFixture<PsychologistHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologistHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
