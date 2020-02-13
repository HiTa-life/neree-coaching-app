import { TestBed } from '@angular/core/testing';

import { StrengthService } from './strength.service';

describe('StrengthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrengthService = TestBed.get(StrengthService);
    expect(service).toBeTruthy();
  });
});
