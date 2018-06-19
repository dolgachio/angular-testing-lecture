import { LoginWidgetWithServiceComponent } from './login-widget-with-service.component';

describe('LoginWidgetWithServiceComponent(', () => {
  let sut: LoginWidgetWithServiceComponent;

  let logInService;

  beforeEach(() => {
    logInService = jasmine.createSpyObj('logInService', ['logInOnServer']);

    sut = new LoginWidgetWithServiceComponent(logInService);
  });

  it('should log in on server', () => {
    sut.isLoggedIn = false;
    sut.logIn();

    expect(logInService.logInOnServer).toHaveBeenCalled();
  });
});
