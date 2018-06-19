import { Component } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-login-widget-with-testbed-and-dependency',
  templateUrl: './login-widget-with-testbed-and-dependency.component.html',
  styleUrls: ['./login-widget-with-testbed-and-dependency.component.css']
})
export class LoginWidgetWithTestbedAndDependencyComponent {
  public isLoggedIn = false;

  constructor(private logInService: LogInService){
  }

  public logIn() {
    this.logInService.logInOnServer();
    this.isLoggedIn = true;
  }

  get message(): string {
    if (this.isLoggedIn) {
      return 'you are logged in!';
    }
    return 'you are logged out!';
  }

}
