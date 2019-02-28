import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/user';
import { ClassDetailsService } from 'src/app/class-details.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-presenter',
  templateUrl: './add-presenter.component.html',
  styleUrls: ['./add-presenter.component.css']
})
export class AddPresenterComponent implements OnInit {

  @Input() currentPresenters: User[];
  @Output() hideAddPresenter = new EventEmitter();
  displayAddPresenter = false;
  user: User;

  constructor(private classService:ClassDetailsService, private router: Router, private authGaurd: AuthServiceService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  addPresenter(presenterForm){
    this.user = presenterForm.value;
    this.classService.presenter.push(this.user);
    this.backToList();
    this.hideAddPresenter.emit(this.displayAddPresenter);
  }
  

  backToList() {
    this.router.navigate(['/presenter']);
  }
}
