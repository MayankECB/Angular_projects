import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate{
  isInsidePresenter: boolean = false;

  constructor(private router: Router) { }

  canActivate(): boolean {
    if(!this.isInsidePresenter){
      this.router.navigate(['/noaccess']);
    }
    return this.isInsidePresenter;
  }
}
