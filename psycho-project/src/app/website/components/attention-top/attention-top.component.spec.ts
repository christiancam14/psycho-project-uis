import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionTopComponent } from './attention-top.component';

describe('AttentionTopComponent', () => {
  let component: AttentionTopComponent;
  let fixture: ComponentFixture<AttentionTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentionTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
