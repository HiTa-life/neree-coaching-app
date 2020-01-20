import { Component } from '@angular/core';
import { TitleService } from '../shared/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
   
    private titleService: TitleService,
  ) {
    
  }

}
