import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardComponent } from './publication-card.component';
import { Publication } from './publication.model';
import { By } from "@angular/platform-browser";
import {Component} from "@angular/core";

/* When components logic is complicated we can usr Test-host approach
* <app-publication-card *ngFor="let publication in allPublications"
        [publication]="publication" (like)="onLiked($event)">
 </app-publication-card>`
* */

@Component({
  template: `
    <app-publication-card
      [publication]="publication" (like)="onLiked($event)">
    </app-publication-card>`
})
class TestHostComponent {
  public publication: Publication = { id: 1, title: 'My dinned', imageSrc: 'mushrooms.png' };
  public likedPublication: Publication;
  public onLiked(likedPublication: Publication) { this.likedPublication = likedPublication; }
}

describe('PublicationCardComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let publication: Publication;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationCardComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should raise publication like', () => {
    fixture.detectChanges();

    const expectedLikedPublication = { id: 1, title: 'My dinned', imageSrc: 'mushrooms.png' };
    const likeButton = fixture.debugElement.query(By.css('.like-button'));
    likeButton.triggerEventHandler('click', null);

    expect(testHost.likedPublication).toEqual(expectedLikedPublication);
  });
});
