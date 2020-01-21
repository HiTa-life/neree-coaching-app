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
