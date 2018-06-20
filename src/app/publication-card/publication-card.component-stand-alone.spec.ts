import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardComponent } from './publication-card.component';
import { Publication } from '../shared/publication.model';
import { By } from "@angular/platform-browser";

describe('PublicationCardComponent', () => {
  let sut: PublicationCardComponent;
  let fixture: ComponentFixture<PublicationCardComponent>;

  let publication: Publication;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    publication = new Publication();
    publication.id = 1;
    publication.title = 'My breakfast';
    publication.imageSrc = 'assets/img/eggs-with-bacon.jpg';

    fixture = TestBed.createComponent(PublicationCardComponent);
    sut = fixture.componentInstance;

    sut.publication = publication;
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should raise publication like', () => {
    const likeButton = fixture.debugElement.query(By.css('.like-button'));

    let likedPublication: Publication;
    sut.like.subscribe((actualPublication: Publication) => likedPublication = actualPublication);

    likeButton.triggerEventHandler('click', null);

    expect(likedPublication).toBe(publication);
  });
});
