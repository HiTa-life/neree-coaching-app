import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAccountComponent } from './header-account.component';


@NgModule({
  declarations: [
    HeaderAccountComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
   HeaderAccountComponent
  ]
})
export class HeaderAccountModule { }
