import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in-widget',
  template: `<button (click)="logIn()">Dare to click me!</button>
                    <span>{{message}}</span>`
})
export class LoginWidgetComponent {
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
