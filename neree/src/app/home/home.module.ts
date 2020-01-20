import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SloganModule } from './slogan/slogan.module';
import { SummaryModule } from './summary/summary.module';
import { TeamModule } from './team/team.module';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { HeaderModule } from '../shared/components/header/header/header.module';
import { FooterModule } from '../shared/components/footer/footer/footer.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    SloganModule,
    SummaryModule,
    TeamModule,    
    HeaderModule,
    FooterModule,
  ]
 
})
export class HomePageModule {}
