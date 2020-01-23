import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPlanComponent } from './action-plan.component';
import { ActionPlanRoutingModule } from './action-plan-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SharedAccountModule } from '../shared/module/shared-account.module';



@NgModule({
  declarations: [
    ActionPlanComponent
  ],
  imports: [
    CommonModule,
    ActionPlanRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SharedAccountModule
  ]
})
export class ActionPlanModule { }
