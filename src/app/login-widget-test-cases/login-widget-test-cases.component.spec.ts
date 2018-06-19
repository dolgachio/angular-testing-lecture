import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWidgetTestCasesComponent } from './login-widget-test-cases.component';
import { LogInService } from '../log-in.service';
import { By } from "@angular/platform-browser";

describe('LoginWidgetTestCasesComponent', () => {
  let sut: LoginWidgetTestCasesComponent;
  let fixture: ComponentFixture<LoginWidgetTestCasesComponent>;

  let logInService;

  beforeEach(async(() => {
    logInService = jasmine.createSpyObj('logInService', ['logInOnServer']);

    TestBed.configureTestingModule({
      declarations: [ LoginWidgetTestCasesComponent ],
      providers: [{provide: LogInService, useValue: logInService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetTestCasesComponent);
    sut = fixture.componentInstance;
  });

  it('should hide heading when user is not logged in', () => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('h1'));
    expect(debugElement).toBe(null);
  });

  it('should show heading when user is logged in', () => {
    sut.logIn();
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('h1'));
    const h1NativeElement = debugElement.nativeElement;

    expect(h1NativeElement.textContent).toBe('you are logged in!');
  });

});
