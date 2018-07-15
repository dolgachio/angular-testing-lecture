import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShelfComponent } from './book-shelf.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-book-shelf
      [book]="book">
    </app-book-shelf>`
})
class TestHostComponent {
  public book = { title: 'default', id: 1, isSpecialOffer: false }
}

describe('BookShelfComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, BookShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change book if changed', () => {
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
    expect(footer).toBe(null);
  });
});
