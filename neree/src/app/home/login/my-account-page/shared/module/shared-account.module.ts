import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAccountModule } from '../components/header-account/header-account.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HeaderAccountModule,
  ],
  exports:[
    HeaderAccountModule,  
  ]
})
export class SharedAccountModule { }
