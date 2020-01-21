import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent,
children: [
  {
    path: "", loadChildren: () => import("./my-account-page/account/account.module")
    .then((mod) => mod.AccountModule)
  },
  // {
  //   path: "", loadChildren: () => import("./my-account-page/value/value.module")
  //   .then((mod) => mod.ValueModule)
  // },
  // {
  //   path: "", loadChildren: () => import("./my-account-page/action-plan/action-plan/action-plan.module")
  //   .then((mod) => mod.ActionPlanModule)
  // },
]
}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class LoginRoutingModule { }
