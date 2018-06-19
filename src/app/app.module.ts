import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginWidgetComponent } from './login-widget/login-widget.component';
import { LoginWidgetWithServiceComponent } from './login-widget-with-service/login-widget-with-service.component';
import { LoginWidgetWithTestbedComponent } from './login-widget-with-testbed/login-widget-with-testbed.component';
import { LoginWidgetWithTestbedAndDependencyComponent } from './login-widget-with-testbed-and-dependency/login-widget-with-testbed-and-dependency.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginWidgetComponent,
    LoginWidgetWithServiceComponent,
    LoginWidgetWithTestbedComponent,
    LoginWidgetWithTestbedAndDependencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
