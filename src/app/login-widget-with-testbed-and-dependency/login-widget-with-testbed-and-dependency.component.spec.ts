import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWidgetWithTestbedAndDependencyComponent } from './login-widget-with-testbed-and-dependency.component';
import { LogInService } from '../log-in.service';
import { By } from '@angular/platform-browser';

describe('LoginWidgetWithTestbedAndDependencyComponent', () => {
  let sut: LoginWidgetWithTestbedAndDependencyComponent;
  let fixture: ComponentFixture<LoginWidgetWithTestbedAndDependencyComponent>;

  let logInService: Partial<LogInService>;

  beforeEach(() => {
    logInService = { logInOnServer: jasmine.createSpy('logInOnServer') };

    TestBed.configureTestingModule({
      declarations: [ LoginWidgetWithTestbedAndDependencyComponent ],
      providers: [{provide: LogInService, useValue: logInService}]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetWithTestbedAndDependencyComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should call server', () => {
    const button = fixture.debugElement.query(By.css('.dare-button'));
    button.triggerEventHandler('click', null);

    expect(logInService.logInOnServer).toHaveBeenCalled();
  });

});
