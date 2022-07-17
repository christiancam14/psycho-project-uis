import { TestBed } from '@angular/core/testing';

import { PsychoGuardGuard } from './psycho-guard.guard';

describe('PsychoGuardGuard', () => {
  let guard: PsychoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PsychoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
