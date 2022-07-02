import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionCardComponent } from './opinion-card.component';

describe('OpinionCardComponent', () => {
  let component: OpinionCardComponent;
  let fixture: ComponentFixture<OpinionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
