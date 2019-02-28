import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassDetailsService {

  public attendee: User[];
  public presenter: User[] = [
    new User(1, 'Mayank', 'Gupta', 'Big Data'),
    new User(2, 'Satish', 'Khardia', 'Unit Testing'),
    new User(3, 'Prem', 'Prakash', 'Micro Service'),
    new User(4, 'Nikhil', 'Pareek', 'Integration Testing'),
    new User(5, 'Gaurav', 'Pareek', 'JAVA'),
    new User(6, 'Mohammad', 'Hussain', 'Angular')
  ];

  constructor(private http: Http) { }

  getPreseterList() {
    
  }

  public getPreseterDetails(): User[] {
    return this.presenter;
  }

  getAttendeeList(empid: string) {

  }

  public getAttendeeDetails() {
    if (!this.attendee) {
      return this.http.get('./assets/api/attendee.json').pipe(map((response: any) => response.json()));
    } else {
      console.log('Getting local data');
      return of(this.attendee);
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return throwError(msg);
  }
}