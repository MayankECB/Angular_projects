import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PresenterModule } from './presenter/presenter.module';
import { AttendeeModule } from './attendee/attendee.module';
import { ClassDetailsService } from './class-details.service';
import { HttpModule } from '@angular/http';
import { AuthServiceService } from './auth-service.service';
import { SettingsComponent } from './settings/settings.component';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresenterModule,
    AttendeeModule,
    HttpModule
  ],
  providers: [ClassDetailsService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
