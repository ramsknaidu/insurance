import { TestBed } from '@angular/core/testing';

import { InsuranceAPIService } from './insurance-api.service';

describe('InsuranceAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsuranceAPIService = TestBed.get(InsuranceAPIService);
    expect(service).toBeTruthy();
  });
});
