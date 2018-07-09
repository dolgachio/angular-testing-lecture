import { TestBed, inject } from '@angular/core/testing';

import { MarvelUniverseService } from './marvel-universe.service';

describe('MarvelUniverseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelUniverseService]
    });
  });

  it('should be created', inject([MarvelUniverseService], (service: MarvelUniverseService) => {
    expect(service).toBeTruthy();
  }));
});
