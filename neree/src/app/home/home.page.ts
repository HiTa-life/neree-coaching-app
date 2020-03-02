import { Component } from '@angular/core';
import { TitleService } from '../shared/services/title.service';
import { first } from 'rxjs/operators';
import { UserService } from './account-creation/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from './account-creation/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser: User;
  users = [];
  constructor(
   
    private titleService: TitleService,
    private authenticationService: AuthenticationService,
        private userService: UserService,
        private router:Router,
        private authService: AuthService
  ) { 
    this.currentUser = this.authenticationService.currentUserValue;
  }

  hasAnyRole(roles: string[]) {
    return this.authService.hasAnyRole(roles);
  }

  getLogin() {
    return this.authService.getUser().login;
  }

  logout() {
    return this.authService.logout();
  }
}
