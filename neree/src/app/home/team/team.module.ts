import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
