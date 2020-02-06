import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreationComponent } from './account-creation.component';
import { AccountCreationRoutingModule } from './account-creation-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { HeaderModule } from '../../shared/components/header/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AccountCreationComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AccountCreationRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    SharedModule,
  ],
  
})
export class AccountCreationModule { }
