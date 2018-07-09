import { Injectable } from '@angular/core';
import {Hero} from "./hero.model";

@Injectable({
  providedIn: 'root'
})
export class MarvelUniverseService {
  public heroes: Hero[] = [
    {
      name: 'Iron Man',
      power: 100,
    },
    {
      name: 'The Hulk',
      power: Infinity,
    },
    {
      name: 'Thor',
      power: 110,
    }
  ];

  public getTheStrongestHero(): Hero {
    return this.heroes.reduce((strongestHero, hero) => {
      if (hero.power > strongestHero.power) {
        return hero;
      }
      return strongestHero;
    });
  }
}
