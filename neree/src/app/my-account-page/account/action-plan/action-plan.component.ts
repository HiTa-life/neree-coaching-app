import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.scss'],
})
export class ActionPlanComponent implements OnInit {

  actionPlanForm: FormGroup;
  submitted = false; //comportement par défaut de la variable submitted

  constructor(private formb: FormBuilder) { }

  ngOnInit() {
    this.actionPlanForm = this.formb.group({
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
  get f() { return this.actionPlanForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.actionPlanForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.actionPlanForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.actionPlanForm.reset();
}
}
