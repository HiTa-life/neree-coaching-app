import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SharedAccountModule } from '../shared/module/shared-account.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedAccountModule,
    SharedModule
  ]
})
export class CalendarModule { }
