import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistManagerComponent } from './psychologist-manager.component';

describe('PsychologistManagerComponent', () => {
  let component: PsychologistManagerComponent;
  let fixture: ComponentFixture<PsychologistManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologistManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
