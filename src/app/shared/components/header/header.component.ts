import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isUserAuth: boolean = false;
  private userSub!: Subscription;
  userName!: string

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.loggedUser.subscribe(user => {
      this.isUserAuth = !!user;
      this.userName = user?.name as string
    })
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
