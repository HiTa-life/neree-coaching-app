import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePage } from './home/home.page';
import { AccountComponent } from './my-account-page/account/account.component';
import { StrengthRoutingModule } from './my-account-page/account/strength/strength-routing.module';
import { StrengthComponent } from './my-account-page/account/strength/strength.component';
import { ActionPlanComponent } from './my-account-page/account/action-plan/action-plan.component';
import { LoginComponent } from './home/login/login.component';
import { AccountCreationComponent } from './home/account-creation/account-creation.component';
import { ObjectiveComponent } from './my-account-page/account/objective/objective.component';
import { CalendarComponent } from './my-account-page/account/calendar/calendar.component';
import { AuthGuard } from './helpers/auth.guard'

const routes: Routes = [
  
    {path: 'home/login', component: LoginComponent},
    {path: 'home/account-creation', component: AccountCreationComponent},
    {path: 'account', component: AccountComponent },
    {path:'account/action-plan', component: ActionPlanComponent},
    {path:'account/strength', component: StrengthComponent},
    {path:'account/objective', component: ObjectiveComponent},
    {path:'account/calendar', component: CalendarComponent},
    { path: '', component: HomePage, canActivate: [AuthGuard]  },
    {path: "**", component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, { 
        preloadingStrategy: PreloadAllModules
       })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
