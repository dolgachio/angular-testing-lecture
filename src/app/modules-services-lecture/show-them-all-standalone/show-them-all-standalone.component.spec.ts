import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThemAllStandaloneComponent } from './show-them-all-standalone.component';
import { CompareAllService } from "../compare-all.service";
import { By } from "@angular/platform-browser";

describe('ShowThemAllStandaloneComponent', () => {
  let component: ShowThemAllStandaloneComponent;
  let fixture: ComponentFixture<ShowThemAllStandaloneComponent>;

  let compareAllService: Partial<CompareAllService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowThemAllStandaloneComponent ]
    })
    .overrideComponent(ShowThemAllStandaloneComponent, {
      set: {
        providers: [{ provide: CompareAllService, useValue: {} }]
      },
      /*add: {...},
      remove: {...}*/
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowThemAllStandaloneComponent);
    component = fixture.componentInstance;
    compareAllService = fixture.debugElement.injector.get(CompareAllService);
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
