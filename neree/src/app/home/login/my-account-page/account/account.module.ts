import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedAccountModule } from '../shared/module/shared-account.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { ValueModule } from './value/value.module';
import { ActionPlanModule } from './action-plan/action-plan.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedAccountModule,
    ValueModule, 
    ActionPlanModule,
    ReactiveFormsModule,
    AccountRoutingModule,
  ],
  exports:[
    ValueModule,
    ActionPlanModule
  ]
})
export class AccountModule { }
