import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAccountModule } from '../components/header-account/header-account.module';
import { FooterAccountModule } from '../components/footer-account/footer-account.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HeaderAccountModule,
    FooterAccountModule
  ],
  exports:[
    HeaderAccountModule,
    FooterAccountModule  
  ]
})
export class SharedAccountModule { }
