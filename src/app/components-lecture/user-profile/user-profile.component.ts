import { Component } from '@angular/core';
import {Publication} from "../shared/publication.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public userPublications: Publication[] = [
    { id: 1, title: 'My post1', imageSrc: 'img1.png' },
    { id: 2, title: 'My post2', imageSrc: 'img2.png' },
    { id: 3, title: 'My post3', imageSrc: 'img3.png' }
  ];
}
