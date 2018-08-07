import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news = [
    'Very good news',
    'Good news'
  ];

  constructor() { }

  public getLatestNews(): Observable<string[]> {
    return of(this.news);
  }
}
