import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginWidgetComponent } from './components-lecture/login-widget/login-widget.component';
import { LoginWidgetWithServiceComponent } from './components-lecture/login-widget-with-service/login-widget-with-service.component';
import { LoginWidgetWithTestbedComponent } from './components-lecture/login-widget-with-testbed/login-widget-with-testbed.component';
import { LoginWidgetWithTestbedAndDependencyComponent } from './components-lecture/login-widget-with-testbed-and-dependency/login-widget-with-testbed-and-dependency.component';
import { PublicationCardComponent } from './components-lecture/publication-card/publication-card.component';
import { UserProfileComponent } from './components-lecture/user-profile/user-profile.component';
import { UserPictureComponent } from './components-lecture/user-profile/user-picture/user-picture.component';
import { UserMenuComponent } from './components-lecture/user-profile/user-menu/user-menu.component';
import { UserInfoComponent } from './components-lecture/user-profile/user-info/user-info.component';
import { PublicationLogService } from './components-lecture/publication-card/publication-log.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginWidgetComponent,
    LoginWidgetWithServiceComponent,
    LoginWidgetWithTestbedComponent,
    LoginWidgetWithTestbedAndDependencyComponent,
    PublicationCardComponent,

    UserProfileComponent,
    UserPictureComponent,
    UserMenuComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PublicationLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
