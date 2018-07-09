import { Injectable } from '@angular/core';
import { DcUniverseService } from "./dc-universe.service";
import { MarvelUniverseService } from "./marvel-universe.service";
import { Hero } from "./hero.model";

@Injectable({
  providedIn: 'root'
})
export class CompareAllService {
  constructor(private dcUniverseService: DcUniverseService,
              private marvelUniverseService: MarvelUniverseService) { }

  public getTheOne(): Hero {
    const dcHero = this.dcUniverseService.getTheStrongestHero();
    const marvelHero = this.marvelUniverseService.getTheStrongestHero();

    if (dcHero.name === 'Batman' || dcHero.power > marvelHero.power) {
      return dcHero;
    }
    return marvelHero;
  }
}
