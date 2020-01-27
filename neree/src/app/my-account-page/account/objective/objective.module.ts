import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveComponent } from './objective.component';
import { ObjectiveRoutingModule } from './objective-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAccountModule } from '../shared/module/shared-account.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    ObjectiveComponent
  ],
  imports: [
    CommonModule,
    ObjectiveRoutingModule,
    ReactiveFormsModule,
    SharedAccountModule,
    SharedModule
  ]
})
export class ObjectiveModule { }
