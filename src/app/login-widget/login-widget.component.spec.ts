import { LoginWidgetComponent } from './login-widget.component';

describe('LoginWidgetComponent', () => {
  let sut: LoginWidgetComponent;

  beforeEach(() => {
    sut = new LoginWidgetComponent();
  });

  it('should show default message when logged out', () => {
    expect(sut.message).toBe('you are logged out!');
  });

  it('should show welcome message when logged in', () => {
    sut.logIn();

    expect(sut.message).toBe('you are logged in!');
  });
});
