import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAccountModule } from '../components/header-account/header-account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    HeaderAccountModule,
    IonicModule.forRoot()
    ],
  exports:[
    IonicModule,
    HeaderAccountModule,  
  ]
})
export class SharedAccountModule { }
