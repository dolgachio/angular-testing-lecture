import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardComponent } from './publication-card.component';
import { Publication } from '../shared/publication.model';
import { By } from "@angular/platform-browser";
import {Component} from "@angular/core";
import { PublicationLogService } from './publication-log.service';

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

  let publicationLogService: Partial<PublicationLogService>;

  beforeEach(() => {
    publicationLogService = {
      logPublication: jasmine.createSpy('logPublication')
    };

    TestBed.configureTestingModule({
      declarations: [ PublicationCardComponent, TestHostComponent ],
      providers: [{ useValue: publicationLogService,
        provide: PublicationLogService }]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  describe('ngOnChanges', () => {
    it('should log publication', () => {
      fixture.detectChanges();

      expect(publicationLogService.logPublication).toHaveBeenCalled();
    });
  });

  it('should raise publication like', () => {
    fixture.detectChanges();

    const expectedLikedPublication = { id: 1, title: 'My dinned', imageSrc: 'mushrooms.png' };

    const likeButton = fixture.debugElement.query(By.css('.like-button'));
    likeButton.triggerEventHandler('click', null);

    expect(testHost.likedPublication).toEqual(expectedLikedPublication);
  });
});
