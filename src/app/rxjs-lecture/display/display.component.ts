import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public news: Observable<string[]>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getLatestNews();
  }

}
