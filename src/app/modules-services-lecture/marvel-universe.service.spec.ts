import { MarvelUniverseService } from './marvel-universe.service';

describe('MarvelUniverseService', () => {
  let sut: MarvelUniverseService;

  beforeEach(() => {
    sut = new MarvelUniverseService();
  });

  it('should return the most powerful hero', () => {
    const mockHeroes = [
        {
          name: 'Ant-man',
          power: 90,
        },
        {
          name: 'Dr. Banner',
          power: 10,
        },
        {
          name: 'Spider-man',
          power: 150,
        }
      ];
    const expectedResult = {
      name: 'Spider-man',
      power: 150,
    };
    sut.heroes = mockHeroes;

    expect(sut.getTheStrongestHero()).toEqual(expectedResult);
  });
});
