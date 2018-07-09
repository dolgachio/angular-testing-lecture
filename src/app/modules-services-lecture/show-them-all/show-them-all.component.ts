import { Component, OnInit } from '@angular/core';
import { CompareAllService } from '../compare-all.service';
import {Hero} from "../hero.model";

@Component({
  selector: 'app-show-them-all',
  templateUrl: './show-them-all.component.html',
  styleUrls: ['./show-them-all.component.css']
})
export class ShowThemAllComponent implements OnInit {
  public hero: Hero;

  constructor(private compareAllService: CompareAllService) { }

  ngOnInit() {
  }

  public show(): void {
    this.hero = this.compareAllService.getTheOne();
  }

}
