import { TestBed, async, inject } from '@angular/core/testing';

import { UniversalGuard } from './universal.guard';

describe('UniversalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalGuard]
    });
  });

  it('should ...', inject([UniversalGuard], (guard: UniversalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
