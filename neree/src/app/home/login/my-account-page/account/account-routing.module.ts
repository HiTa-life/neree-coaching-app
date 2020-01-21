import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "account", component: AccountComponent,
children: [
  {
    path:"", loadChildren: () => import("./value/value.module")
    .then((mod) => mod.ValueModule)
  },
  {
    path:"", loadChildren: () => import("./action-plan/action-plan.module")
    .then((mod) => mod.ActionPlanModule)
  },
]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountRoutingModule { }
