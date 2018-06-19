import { Component } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-login-widget-test-cases',
  templateUrl: './login-widget-test-cases.component.html',
  styleUrls: ['./login-widget-test-cases.component.css']
})
export class LoginWidgetTestCasesComponent {
  public isLoggedIn = false;

  constructor(private logInService: LogInService) {
  }

  public logIn() {
    this.logInService.logInOnServer();
    this.isLoggedIn = true;
  }

  get message(): string {
    if (this.isLoggedIn) {
      return 'you are logged in!';
    }
  }
}
