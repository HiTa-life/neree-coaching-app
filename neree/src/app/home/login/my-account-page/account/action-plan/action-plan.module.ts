import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionPlanComponent } from './action-plan.component';
import { ActionPlanRoutingModule } from './action-plan-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderAccountModule } from '../../shared/components/header-account/header-account.module';
import { FooterModule } from 'src/app/shared/components/footer/footer/footer.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SharedAccountModule } from '../../shared/module/shared-account.module';



@NgModule({
  declarations: [
    ActionPlanComponent
  ],
  imports: [
    CommonModule,
    ActionPlanRoutingModule,
    ReactiveFormsModule,
    HeaderAccountModule,
    FooterModule,
    SharedModule,
    SharedAccountModule
  ]
})
export class ActionPlanModule { }
