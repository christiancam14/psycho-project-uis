import { TestBed } from '@angular/core/testing';

import { FrequentQuestionsService } from './frequent-questions.service';

describe('FrequentQuestionsService', () => {
  let service: FrequentQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequentQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
