import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsCardsComponent } from './workshops-cards.component';

describe('WorkshopsCardsComponent', () => {
  let component: WorkshopsCardsComponent;
  let fixture: ComponentFixture<WorkshopsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
