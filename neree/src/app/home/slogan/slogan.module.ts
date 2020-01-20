import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SloganComponent } from './slogan.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    SloganComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    SloganComponent
  ]
})
export class SloganModule { }
