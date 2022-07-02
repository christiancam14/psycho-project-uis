import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistFooterComponent } from './psychologist-footer.component';

describe('PsychologistFooterComponent', () => {
  let component: PsychologistFooterComponent;
  let fixture: ComponentFixture<PsychologistFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologistFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
