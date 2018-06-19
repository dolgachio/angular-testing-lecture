import { Component } from '@angular/core';
import { LogInService } from './log-in.service';

@Component({
  selector: 'app-log-in-widget-with-service',
  template: `<button (click)="logIn()">Dare to click me!</button>
                    <span>{{message}}</span>`
})
export class LoginWidgetWithServiceComponent {
  public isLoggedIn = false;
  constructor(private logInService: LogInService){}

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
