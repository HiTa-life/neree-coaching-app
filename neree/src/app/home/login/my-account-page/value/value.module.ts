import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueComponent } from './value.component';
import { ValueRoutingModule } from './value-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/shared/components/header/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer/footer.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    ValueComponent
  ],
  imports: [
    CommonModule,
    ValueRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    SharedModule    
  ]
})
export class ValueModule { }
