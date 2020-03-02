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
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './my-account-page/account/account.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],

  entryComponents: [],

  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    AccountModule,
    SharedModule,
    PageNotFoundModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
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
