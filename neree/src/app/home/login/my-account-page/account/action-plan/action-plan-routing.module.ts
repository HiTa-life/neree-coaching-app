import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActionPlanComponent } from './action-plan.component';


const routes: Routes = [
  {path: "", component: ActionPlanComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class ActionPlanRoutingModule { }
