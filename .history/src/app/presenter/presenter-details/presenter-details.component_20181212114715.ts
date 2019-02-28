import { Component, OnInit } from '@angular/core';
import { ClassDetailsService } from 'src/app/class-details.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-presenter-details',
  templateUrl: './presenter-details.component.html',
  styleUrls: ['./presenter-details.component.css']
})
export class PresenterDetailsComponent implements OnInit {

  presenterList: User[];
  currentUser: User;
  addButtonClicked: boolean = false;

  constructor(private classService:ClassDetailsService, private router: Router, private authGaurd: AuthServiceService) { 
    this.presenterList = this.classService.getPreseterDetails();
  } 
  
  ngOnInit() {
    this.authGaurd.isInsidePresenter = true;
  }

  addPresenter(){
    this.router.navigate(['/add-presenter'])
    // this.addButtonClicked = true;
  }

  showSettings(){
    this.router.navigate(['/settings'])
  }
    
  showDashboard(){
    this.router.navigate(['/'])
  }
}