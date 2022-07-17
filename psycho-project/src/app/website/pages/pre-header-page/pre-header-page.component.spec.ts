import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreHeaderPageComponent } from './pre-header-page.component';

describe('PreHeaderPageComponent', () => {
  let component: PreHeaderPageComponent;
  let fixture: ComponentFixture<PreHeaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreHeaderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
