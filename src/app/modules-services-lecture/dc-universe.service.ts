import { Injectable } from '@angular/core';
import {Hero} from "./hero.model";

@Injectable({
  providedIn: 'root'
})
export class DcUniverseService {
  public batman: Hero = {
    name: 'Batman',
    power: 10000000
  };

  public getTheStrongestHero(): Hero {
    return this.batman;
  }
}
