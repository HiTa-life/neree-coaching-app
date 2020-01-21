import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
 
  {
    path: "home", component: HomePage,
    children: [
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
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
