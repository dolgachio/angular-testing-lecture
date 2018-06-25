import { Injectable } from '@angular/core';
import {Publication} from "../shared/publication.model";

@Injectable({
  providedIn: 'root'
})
export class PublicationLogService {
  logPublication(publication: Publication): void {
    // log it
  }
}
