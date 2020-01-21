import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../../components/header/header/header.module';
import { FooterModule } from '../../components/footer/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    IonicModule.forRoot()
  ],
  exports:[
    IonicModule, 
    HeaderModule,
    FooterModule
  ]})
export class SharedModule { }
