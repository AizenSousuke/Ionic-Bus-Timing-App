import { TestBed } from '@angular/core/testing';

import { LTAAPIService } from './lta-api.service';

describe('LTAAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LTAAPIService = TestBed.get(LTAAPIService);
    expect(service).toBeTruthy();
  });
});
