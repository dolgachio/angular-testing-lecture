import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Publication} from "../shared/publication.model";

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent {
  @Input() public publication: Publication;
  @Output() public like = new EventEmitter<Publication>();

  public click(): void {
    this.like.emit(this.publication);
  }
}
