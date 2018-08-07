import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { NewsService} from '../news.service';
import { of, defer } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';
import { last } from 'rxjs/internal/operators';
import { cold, getTestScheduler } from 'jasmine-marbles';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let newsService: Partial<NewsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent ],
      providers: [ { provide: NewsService, useValue: {} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    newsService = TestBed.get(NewsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show news with spy and sync', () => {
    newsService.getLatestNews = jasmine.createSpy('getLatest').and.returnValue(of(['some', 'cool', 'news']));
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('p');
    expect(el.textContent).toBe('some,cool,news');
  });

  it('should show news with fakeAsync', fakeAsync(() => {
    newsService.getLatestNews = jasmine.createSpy('getLatest')
      .and.returnValue(defer(() => Promise.resolve(['fake news'])));

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('p');
    expect(el.textContent).toBe('fake news');
  }));

  it('should show news with done', (done) => {
    newsService.getLatestNews = jasmine.createSpy('getLatest')
      .and.returnValue(defer(() => Promise.resolve(['fake news'])));
    fixture.detectChanges();

    component.news.pipe(last()).subscribe(() => {
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelector('p');
      expect(el.textContent).toBe('fake news');

      done();
    })
  });

  it('should show new with marbles', () => {
    // observable test quote value and complete(), after delay
    const news = cold('---x|', { x: ['fake news'] });
    newsService.getLatestNews = jasmine.createSpy('getLatest')
      .and.returnValue(news);
    fixture.detectChanges(); // ngOnInit()

    getTestScheduler().flush(); // flush the observables

    fixture.detectChanges(); // update view

    const el = fixture.nativeElement.querySelector('p');
    expect(el.textContent).toBe('fake news');
  });

});
