import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
protected title: string;

  constructor(
    private titleService: TitleService
  ) {
    this.title = "Nérée-coaching-app";
    this.titleService.getTitle().subscribe(
      (value: string) => setTimeout (() => this.title = value)
    );
   }

  ngOnInit() {}

}
