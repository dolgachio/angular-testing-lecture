import { CompareAllService } from './compare-all.service';
import { DcUniverseService } from './dc-universe.service';
import { MarvelUniverseService } from './marvel-universe.service';
import SpyObj = jasmine.SpyObj;
import {TestBed} from "@angular/core/testing";

describe('CompareAllService with TestBed', () => {
  let sut: CompareAllService;

  let dcUniverseService: Partial<DcUniverseService>;
  let marvelUniverseService: Partial<MarvelUniverseService>;

  let mockDcHero;
  let mockMarvelHero;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompareAllService,
        { provide: DcUniverseService, useValue: {}},
        { provide: MarvelUniverseService, useValue: {}},
      ]
    });

    sut = TestBed.get(CompareAllService);
    dcUniverseService = TestBed.get(DcUniverseService);
    marvelUniverseService = TestBed.get(MarvelUniverseService);
  });
  
  describe('getTheOne', () => {
    describe('when DC hero is batman', () => {
      beforeEach(() => {
        mockDcHero = { name: 'Batman', power: 1 };
        mockMarvelHero = { name: 'The Hulk', power: Infinity };

        dcUniverseService.getTheStrongestHero = jasmine.createSpy('get').and.returnValue(mockDcHero);
        marvelUniverseService.getTheStrongestHero = jasmine.createSpy('get').and.returnValue(mockMarvelHero);
      });

      it('should be the Batman', () => {
        expect(sut.getTheOne()).toBe(mockDcHero);
      });
    });

    describe('when DC hero is more powerful', () => {
      beforeEach(() => {
        mockDcHero = { name: 'Cat woman', power: 100 };
        mockMarvelHero = { name: 'Vision', power: 10 };

        dcUniverseService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroDc')
          .and.returnValue(mockDcHero);
        marvelUniverseService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroMarvel')
          .and.returnValue(mockMarvelHero);
      });

      it('should be a DC hero', () => {
        expect(sut.getTheOne()).toBe(mockDcHero);
      });
    });

    describe('when Marvel hero is more powerful', () => {
      beforeEach(() => {
        mockDcHero = { name: 'Robin', power: 100 };
        mockMarvelHero = { name: 'Iron man', power: 100000 };

        dcUniverseService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroDc')
          .and.returnValue(mockDcHero);
        marvelUniverseService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroMarvel')
          .and.returnValue(mockMarvelHero);
      });

      it('should be a Marvel hero', () => {
        expect(sut.getTheOne()).toBe(mockMarvelHero);
      });
    });
  });
});
