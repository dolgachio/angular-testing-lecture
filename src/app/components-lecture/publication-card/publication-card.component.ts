import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Publication } from "../shared/publication.model";
import { PublicationLogService } from "./publication-log.service";

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnChanges {
  @Input() public publication: Publication;
  @Output() public like = new EventEmitter<Publication>();

  constructor(private publicationLogService: PublicationLogService) {
  }

  public click(): void {
    this.like.emit(this.publication);
  }

  public ngOnChanges(changes) {
    if (changes['publication']) {
      this.publicationLogService.logPublication(changes['publication']);
    }
  }
}
