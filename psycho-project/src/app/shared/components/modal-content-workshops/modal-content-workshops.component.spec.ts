import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentWorkshopsComponent } from './modal-content-workshops.component';

describe('ModalContentWorkshopsComponent', () => {
  let component: ModalContentWorkshopsComponent;
  let fixture: ComponentFixture<ModalContentWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContentWorkshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
