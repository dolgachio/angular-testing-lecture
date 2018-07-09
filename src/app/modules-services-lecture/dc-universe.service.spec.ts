import { TestBed, inject } from '@angular/core/testing';

import { DcUniverseService } from './dc-universe.service';

describe('DcUniverseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DcUniverseService]
    });
  });

  it('should be created', inject([DcUniverseService], (service: DcUniverseService) => {
    expect(service).toBeTruthy();
  }));
});
