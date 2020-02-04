import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreationComponent } from './account-creation.component';
import { AccountCreationRoutingModule } from './account-creation-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { HeaderModule } from '../../shared/components/header/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer/footer.module';




@NgModule({
  declarations: [
    AccountCreationComponent
  ],
  imports: [
    CommonModule,
    AccountCreationRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    SharedModule,
  ],
  
})
export class AccountCreationModule { }
