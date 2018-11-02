import { TestBed } from '@angular/core/testing';

import { ComponentAdderService } from './component-adder.service';

describe('ComponentAdderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentAdderService = TestBed.get(ComponentAdderService);
    expect(service).toBeTruthy();
  });
});
