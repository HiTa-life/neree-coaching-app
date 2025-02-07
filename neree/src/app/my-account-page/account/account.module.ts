import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedAccountModule } from './shared/module/shared-account.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { StrengthModule } from './strength/strength.module';
import { ActionPlanModule } from './action-plan/action-plan.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ObjectiveModule } from './objective/objective.module';
import { CalendarModule } from './calendar/calendar.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedAccountModule,
    StrengthModule, 
    ActionPlanModule,
    ObjectiveModule,
    CalendarModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    AppRoutingModule
  ],
  exports:[
    StrengthModule,
    ActionPlanModule
  ]
})
export class AccountModule { }
