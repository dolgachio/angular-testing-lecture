import { LoginWidgetWithServiceComponent } from './login-widget-with-service.component';
import { LogInService } from '../log-in.service';

describe('LoginWidgetWithServiceComponent(', () => {
  let sut: LoginWidgetWithServiceComponent;

  let logInService: Partial<LogInService>;

  beforeEach(() => {
    logInService = { logInOnServer: jasmine.createSpy('logInOnServer') };

    sut = new LoginWidgetWithServiceComponent(logInService as LogInService);
  });

  it('should log in on server', () => {
    sut.isLoggedIn = false;
    sut.logIn();

    expect(logInService.logInOnServer).toHaveBeenCalled();
  });
});
