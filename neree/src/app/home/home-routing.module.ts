import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from '../services/auth/auth.guard';
import { AccountComponent } from '../my-account-page/account/account.component';


const routes: Routes = [

  {
    path: "home", component: HomePage,
    children: [
      {
        path: 'account',
        canActivate: [AuthGuard],
        component: AccountComponent
      },
      {
        path: "", loadChildren: () => import('./login/login.module')
          .then((mod) => mod.LoginModule)
      },

      {
        path: "", loadChildren: () => import('./account-creation/account-creation.module')
          .then((mod) => mod.AccountCreationModule)
      },
    ]
  }
];
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
export class HomeRoutingModule { }
