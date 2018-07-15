import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookShelfComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
