import { TestBed } from '@angular/core/testing';

import { StudentLogGuard } from './student-log.guard';

describe('StudentLogGuard', () => {
  let guard: StudentLogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentLogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
