import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueComponent } from './value.component';
import { ValueRoutingModule } from './value-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/shared/components/footer/footer/footer.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { HeaderAccountModule } from '../../shared/components/header-account/header-account.module';
import { SharedAccountModule } from '../../shared/module/shared-account.module';



@NgModule({
  declarations: [
    ValueComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderAccountModule,
    FooterModule,
    SharedModule, 
    SharedAccountModule,   
    ValueRoutingModule
  ]
})
export class ValueModule { }
