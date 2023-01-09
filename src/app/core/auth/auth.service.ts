import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

import {UserBase} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser = new BehaviorSubject<UserBase | null>(null);
  private users: UserBase[] = [];

  constructor(private router: Router,) {
  }

  get user(): string {
    return localStorage.getItem('user') || '';
  }

  get usersArr(): string {
    return localStorage.getItem('users') as string;
  }

  initUsersArr() {
    this.users = JSON.parse(this.usersArr) ? JSON.parse(this.usersArr) : [];
  }

  register(user: UserBase) {
    let exist = false;
    for (const u of this.users) {
      if (u.email === user.email) {
        exist = true
        break
      }
    }
    if (exist) {
      alert('Exist')
    } else {
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
      alert('User registered successfully');
      this.router.navigate(['./login']);
    }
  }

  login(user: UserBase) {
    let isLoginDataCorrect = false
    for (const u of this.users) {
      if (u.email === user.email && u.password === user.password) {
        this.loggedUser.next(u);
        isLoginDataCorrect = true;
        localStorage.setItem('user', JSON.stringify(u));
        this.router.navigate(['./home']);
        break
      }
    }
    !isLoginDataCorrect && alert('Wrong auth data!')
  }

  autoLogin() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.loggedUser.next(user)
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedUser.next(null);
    this.router.navigate(['./login']);
  }
}
