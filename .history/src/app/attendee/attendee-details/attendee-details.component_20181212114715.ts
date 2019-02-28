import { Component, OnInit } from '@angular/core';
import { ClassDetailsService } from 'src/app/class-details.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-attendee-details',
  templateUrl: './attendee-details.component.html',
  styleUrls: ['./attendee-details.component.css']
})
export class AttendeeDetailsComponent implements OnInit {

  constructor(private classService:ClassDetailsService, private router: Router, private authGaurd: AuthServiceService) { }

  attendeeList: User[];
  errorMessage: string;
  addButtonClicked: boolean = false;
  
  showDashboard(){
    this.router.navigate(['/']);
  }

  
  showSettings(){
    this.router.navigate(['/settings']);
  }

  addAttendee(){
    this.router.navigate(['/add-attendee']);
    // this.addButtonClicked = true;
  }

  ngOnInit() {
    this.authGaurd.isInsidePresenter = false;

    this.classService.getAttendeeDetails().subscribe(attendeeList => {
      this.classService.attendee = attendeeList;
      this.attendeeList = attendeeList;
      console.log('attendee list - ', this.attendeeList)
    });
  }
}
