import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCardsComponent } from './assessment-cards.component';

describe('AssessmentCardsComponent', () => {
  let component: AssessmentCardsComponent;
  let fixture: ComponentFixture<AssessmentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
