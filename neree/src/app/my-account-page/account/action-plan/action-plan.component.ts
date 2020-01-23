import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.scss'],
})
export class ActionPlanComponent implements OnInit {

  actionPlanForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actionPlanForm = this.fb.group({
num: [],
titleAction: [],
description: [],
positiveObjective: [],
beginningDate: [],
endDate: [],
efficienceAction: [],
expectedResult: [],
specificAction: [],
mesurableAction: [],
motivatingAction: [],
ecologicAction: [],
positiveAction: [],
realizableAction: [],
internalResources: [],
externalResources: [],
obstacles: [],
deflectObstacles: []



    });
  }
actionPlan(){
  console.log('Données du formulaire...', this.actionPlanForm.value)
}
}
