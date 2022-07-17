import { TestBed } from '@angular/core/testing';

import { WorshopsService } from './worshops.service';

describe('WorshopsService', () => {
  let service: WorshopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorshopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
