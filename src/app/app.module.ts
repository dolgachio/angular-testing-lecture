import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginWidgetComponent } from './login-widget/login-widget.component';
import { LoginWidgetWithServiceComponent } from './login-widget-with-service/login-widget-with-service.component';
import { LoginWidgetWithTestbedComponent } from './login-widget-with-testbed/login-widget-with-testbed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginWidgetComponent,
    LoginWidgetWithServiceComponent,
    LoginWidgetWithTestbedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
