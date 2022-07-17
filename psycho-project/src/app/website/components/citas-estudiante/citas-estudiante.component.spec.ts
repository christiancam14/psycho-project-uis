import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasEstudianteComponent } from './citas-estudiante.component';

describe('CitasEstudianteComponent', () => {
  let component: CitasEstudianteComponent;
  let fixture: ComponentFixture<CitasEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
