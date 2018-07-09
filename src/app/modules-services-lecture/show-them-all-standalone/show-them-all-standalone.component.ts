import { Component, OnInit } from '@angular/core';
import { CompareAllService } from '../compare-all.service';
import {Hero} from "../hero.model";

@Component({
  selector: 'app-show-them-all-standalone',
  templateUrl: './show-them-all-standalone.component.html',
  styleUrls: ['./show-them-all-standalone.component.css'],
  providers: [CompareAllService]
})
export class ShowThemAllStandaloneComponent implements OnInit {
  public hero: Hero;

  constructor(private compareAllService: CompareAllService) { }

  ngOnInit() {
  }

  public show(): void {
    this.hero = this.compareAllService.getTheOne();
  }

}
