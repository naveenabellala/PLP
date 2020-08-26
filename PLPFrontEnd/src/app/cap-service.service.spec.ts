import { TestBed } from '@angular/core/testing';

import { CapServiceService } from './cap-service.service';

describe('CapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapServiceService = TestBed.get(CapServiceService);
    expect(service).toBeTruthy();
  });
});
