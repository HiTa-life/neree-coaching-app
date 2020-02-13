import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SharedAccountModule } from '../shared/module/shared-account.module';
import { StrengthComponent } from './strength.component';
import { StrengthRoutingModule } from './strength-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StrengthComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule, 
    SharedAccountModule,
    StrengthRoutingModule  

  ]
})
export class StrengthModule { }
