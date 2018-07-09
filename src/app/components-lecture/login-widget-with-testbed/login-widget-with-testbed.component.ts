import { Component } from '@angular/core';

@Component({
  selector: 'app-login-widget-with-testbed',
  templateUrl: './login-widget-with-testbed.component.html',
  styleUrls: ['./login-widget-with-testbed.component.css']
})
export class LoginWidgetWithTestbedComponent {
  public isLoggedIn = false;

  public logIn() {
    this.isLoggedIn = true;
  }

  get message(): string {
    if (this.isLoggedIn) {
      return 'you are logged in!';
    }
    return 'you are logged out!';
  }
}
