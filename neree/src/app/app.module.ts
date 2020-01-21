import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { LoginModule } from './home/login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountCreationModule } from './home/account-creation/account-creation.module';


@NgModule({
  declarations: [
    AppComponent
  ],

  entryComponents: [],

  imports: [
    BrowserModule,
    HomePageModule,
    LoginModule,
    AccountCreationModule,
    SharedModule,
    PageNotFoundModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
