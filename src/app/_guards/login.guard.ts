import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class LoginGuardService implements CanActivate  {

  constructor(public authService: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}