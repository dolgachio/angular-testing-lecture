import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThemAllComponent } from './show-them-all.component';
import { CompareAllService } from "../compare-all.service";
import { By } from "@angular/platform-browser";

describe('ShowThemAllComponent', () => {
  let component: ShowThemAllComponent;
  let fixture: ComponentFixture<ShowThemAllComponent>;

  let compareAllService: Partial<CompareAllService>;

  beforeEach(async(() => {
    compareAllService = {};
    TestBed.configureTestingModule({
      declarations: [ ShowThemAllComponent ],
      providers: [{ provide: CompareAllService, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowThemAllComponent);
    component = fixture.componentInstance;
    compareAllService = TestBed.get(CompareAllService);

    compareAllService.getTheOne = jasmine.createSpy('getTheOne').and.returnValue({ name: 'Batman' });

    fixture.detectChanges();
  });

  it('should show the hero', () => {
    const buttonDe = fixture.debugElement.query(By.css('button'));
    const h2 = fixture.nativeElement.querySelector('h2');
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(h2.textContent).toBe('Batman');
  });
});
