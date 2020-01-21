import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountCreationComponent } from './account-creation.component';

const routes: Routes = [
  {path: "account-creation", component: AccountCreationComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class AccountCreationRoutingModule { }
