import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StrengthComponent } from './strength.component';

const routes: Routes = [
  
  {path: "strength", component: StrengthComponent,
}
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
export class StrengthRoutingModule { }
