import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {

  constructor(
    private titleService: TitleService,
  ) {
   
   }

 

}
