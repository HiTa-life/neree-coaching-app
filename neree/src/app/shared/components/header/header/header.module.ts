import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
