import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/home/account-creation/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss'],
})
export class HeaderAccountComponent  {
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}