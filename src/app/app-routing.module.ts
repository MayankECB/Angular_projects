import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendeeDetailsComponent } from './attendee/attendee-details/attendee-details.component';
import { AddAttendeeComponent } from './attendee/add-attendee/add-attendee.component';

import { PresenterDetailsComponent } from './presenter/presenter-details/presenter-details.component';
import { AddPresenterComponent } from './presenter/add-presenter/add-presenter.component';
import { AuthServiceService } from './auth-service.service';
import { SettingsComponent } from './settings/settings.component';
import { NoAccessComponent } from './no-access/no-access.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'attendee', component:AttendeeDetailsComponent},
  {path:'add-attendee', component:AddAttendeeComponent},
  {path:'presenter', component:PresenterDetailsComponent},
  {path:'add-presenter', component:AddPresenterComponent},
  {path:'noaccess', component:NoAccessComponent},
  {path:'settings', component:SettingsComponent, canActivate: [AuthServiceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }