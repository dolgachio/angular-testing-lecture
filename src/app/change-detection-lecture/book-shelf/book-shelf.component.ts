import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookShelfComponent implements OnInit {
  @Input() book: Book;
  @Output() take = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public takeTheBook(): void {
    this.take.emit(this.book.id);
  }

}
