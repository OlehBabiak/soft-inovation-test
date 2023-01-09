import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  canLoad(
    route: Route
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorized();
  }

  isAuthorized(): boolean {
    if (this.authService.loggedUser.value) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigateByUrl('/login');

    return false;
  }
}

