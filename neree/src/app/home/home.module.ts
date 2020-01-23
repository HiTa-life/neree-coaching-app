import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';
import { SloganModule } from './slogan/slogan.module';
import { SummaryModule } from './summary/summary.module';
import { TeamModule } from './team/team.module';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { HeaderModule } from '../shared/components/header/header/header.module';
import { FooterModule } from '../shared/components/footer/footer/footer.module';
import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from './login/login.module';
import { AccountCreationModule } from './account-creation/account-creation.module';


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
    LoginModule,
    AccountCreationModule,    
    HeaderModule,
    FooterModule,
  ],
  exports:[
    LoginModule,
    AccountCreationModule
  ]
 
})
export class HomePageModule {}
