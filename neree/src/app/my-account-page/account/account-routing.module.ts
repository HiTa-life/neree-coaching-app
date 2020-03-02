import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { StrengthComponent } from './strength/strength.component';

const routes: Routes = [
  {path: "account", 
canActivate: [AuthGuard],
component: AccountComponent},
  {
    path: "account", component: AccountComponent,
    children: [
      {
        path: 'strength', loadChildren: () => import("./strength/strength.module")
          .then((mod) => mod.StrengthModule),
          canActivate: [AuthGuard],
          component: StrengthComponent
      },
      {
        path: "", loadChildren: () => import("./action-plan/action-plan.module")
          .then((mod) => mod.ActionPlanModule)
      },
      {
        path: "", loadChildren: () => import("./objective/objective.module")
          .then((mod) => mod.ObjectiveModule)
      },
      {
        path: "", loadChildren: () => import("./calendar/calendar.module")
          .then((mod) => mod.CalendarModule)
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
  ],
  providers: [AuthGuard]
})
export class AccountRoutingModule { }
