import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SummaryComponent
  ]
})
export class SummaryModule { }
