import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWidgetWithTestbedAndDependencyComponent } from './login-widget-with-testbed-and-dependency.component';
import { LogInService } from '../log-in.service';

describe('LoginWidgetWithTestbedAndDependencyComponent', () => {
  let sut: LoginWidgetWithTestbedAndDependencyComponent;
  let fixture: ComponentFixture<LoginWidgetWithTestbedAndDependencyComponent>;

  let logInService;

  beforeEach(async(() => {
    logInService = jasmine.createSpyObj('logInService', ['logInOnServer']);

    TestBed.configureTestingModule({
      declarations: [ LoginWidgetWithTestbedAndDependencyComponent ],
      providers: [{provide: LogInService, useValue: logInService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWidgetWithTestbedAndDependencyComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should call server', () => {
    sut.logIn();

    let logInServiceFromTestBed = TestBed.get(LogInService);

    expect(logInServiceFromTestBed.logInOnServer).toHaveBeenCalled();
  });

});
