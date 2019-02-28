import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeeDetailsComponent } from './attendee-details/attendee-details.component';
import { AddAttendeeComponent } from './add-attendee/add-attendee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AttendeeDetailsComponent, AddAttendeeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AttendeeModule { }
