import { CompareAllService } from './compare-all.service';
import { DcUniverseService } from './dc-universe.service';
import { MarvelUniverseService } from './marvel-universe.service';
import SpyObj = jasmine.SpyObj;

describe('CompareAllService', () => {
  let sut: CompareAllService;

  let dcHeroesService: Partial<DcUniverseService>;
  let marvelHeroesService: Partial<MarvelUniverseService>;

  let mockDcHero;
  let mockMarvelHero;

  beforeEach(() => {
    dcHeroesService = {};
    marvelHeroesService = {};

    sut = new CompareAllService(
      dcHeroesService as DcUniverseService,
      marvelHeroesService as MarvelUniverseService
    );
  });
  
  describe('getTheOne', () => {
    describe('when DC hero is batman', () => {
      beforeEach(() => {
        mockDcHero = { name: 'Batman', power: 1 };
        mockMarvelHero = { name: 'The Hulk', power: Infinity };

        dcHeroesService.getTheStrongestHero = jasmine.createSpy('get').and.returnValue(mockDcHero);
        marvelHeroesService.getTheStrongestHero = jasmine.createSpy('get').and.returnValue(mockMarvelHero);
      });

      it('should be the Batman', () => {
        expect(sut.getTheOne()).toBe(mockDcHero);
      });
    });

    describe('when DC hero is more powerful', () => {
      beforeEach(() => {
        mockDcHero = { name: 'Cat woman', power: 100 };
        mockMarvelHero = { name: 'Vision', power: 10 };

        dcHeroesService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroDc')
          .and.returnValue(mockDcHero);
        marvelHeroesService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroMarvel')
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

        dcHeroesService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroDc')
          .and.returnValue(mockDcHero);
        marvelHeroesService.getTheStrongestHero = jasmine.createSpy('getTheStrongestHeroMarvel')
          .and.returnValue(mockMarvelHero);
      });

      it('should be a Marvel hero', () => {
        expect(sut.getTheOne()).toBe(mockMarvelHero);
      });
    });
  });
});
