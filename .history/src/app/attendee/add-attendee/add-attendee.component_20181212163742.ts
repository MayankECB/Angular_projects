import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/user';
import { ClassDetailsService } from 'src/app/class-details.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.css']
})
export class AddAttendeeComponent implements OnInit {

  @Input() user: User = new User(1, '', '', '');
  @Input() currentAttendees: User[];

  @Output() hideAddAttendee = new EventEmitter();
  displayAddAttendee:string = 'false';


  constructor(private classService:ClassDetailsService, private router: Router, private authGaurd: AuthServiceService) {

  }
  ngOnInit() {
  }

  addAttendee(form){
    this.user = form.value;
    this.classService.attendee.push(this.user);
    this.hideAddAttendee.emit(this.displayAddAttendee);
  }

  backToList() {
    this.router.navigate(['/attendee']);
  }


}
