import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ObjectiveComponent } from './objective.component';

const routes: Routes = [
  {path: "objective", redirectTo: 'account/objective'},
  { path: "", component: ObjectiveComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class ObjectiveRoutingModule { }
