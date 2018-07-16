import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShelfComponent } from './book-shelf.component';
import { ChangeDetectionStrategy } from "@angular/core";

describe('BookShelfComponent', () => {
  let component: BookShelfComponent;
  let fixture: ComponentFixture<BookShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShelfComponent);
    component = fixture.componentInstance;
    component.book = { title: 'default', id: 666, isSpecialOffer: false };
    fixture.detectChanges();
  });

  it('should display book', () => {
    component.book = { title: 'Viy', id: 666, isSpecialOffer: false };
    fixture.detectChanges();

    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toBe('Viy');
  });

  it('should show the special offer message', () => {
    component.book = { title: 'Mu-Mu', id: 666, isSpecialOffer: true };
    fixture.detectChanges();

    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer.textContent).toBe('Special offer!!!');
  });

  it('should hide special offer message', () => {
    component.book = { title: 'Mu-Mu', id: 666, isSpecialOffer: false };
    fixture.detectChanges();

    const footer = fixture.nativeElement.querySelector('footer');
    const h3 = fixture.nativeElement.querySelector('h3');

    expect(h3.textContent).toBe('Mu-Mu');
    expect(footer).toBe(null);
  });
});
