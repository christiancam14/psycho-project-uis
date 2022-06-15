import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionQuestionsComponent } from './accordion-questions.component';

describe('AccordionQuestionsComponent', () => {
  let component: AccordionQuestionsComponent;
  let fixture: ComponentFixture<AccordionQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
