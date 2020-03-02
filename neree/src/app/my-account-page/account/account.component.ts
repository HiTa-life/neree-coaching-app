import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { StrengthService } from './strength/strength.service';
import { Strength } from './strength/strength';
import { User } from 'src/app/home/account-creation/user';
import { UserService } from 'src/app/home/account-creation/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  private strength : Strength[]=[];
  private user: User[]=[];
  errorMessage: string;

  constructor(
    private titleService: TitleService,
    private strengthService: StrengthService,
    private userService: UserService,
    private router: Router
  ) {}

  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }
  
  logout() {
    console.log('Tentative de déconnexion');
  
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  
   getStrengths(){
    this.strengthService
    .getStrength()
    .subscribe(
      strengths => {
        this.strength = strengths;
        console.log(strengths)
      },
      error => this.errorMessage = <any>error
    );
  }
  getUsers() {
    this.userService
      .getUser()
      .subscribe(
        users => {
          this.user = users;
          console.log(users)
        },
        error => this.errorMessage = <any>error
      );
  }

}
