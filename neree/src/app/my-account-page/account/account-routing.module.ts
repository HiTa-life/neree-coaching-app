import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: "account", component: AccountComponent,
    children: [
      {
        path: "", loadChildren: () => import("./strength/strength.module")
          .then((mod) => mod.StrengthModule)
      },
      {
        path: "", loadChildren: () => import("./action-plan/action-plan.module")
          .then((mod) => mod.ActionPlanModule)
      },
      {
        path: "", loadChildren: () => import("./objective/objective.module")
          .then((mod) => mod.ObjectiveModule)
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
