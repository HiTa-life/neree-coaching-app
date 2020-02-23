import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActionPlan } from './action-plan';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.scss'],
})
export class ActionPlanComponent implements OnInit {

  actionPlanForm: FormGroup;
  submitted = false; //comportement par défaut de la variable submitted
  errorMessage: string;

  actionPlan : ActionPlan[] = [];
  spresp: any;
  postdata: ActionPlan;
  data: ActionPlan;

  constructor(private formb: FormBuilder, 
    private http: HttpClient) { }

  ngOnInit() {
    this.actionPlanForm = this.formb.group({
      num: [],
      title_action: [],
      description_objective: [],
      positive_objective: [],
      beginning_date: [],
      end_date: [],
      efficience_action: [],
      expected_result: [],
      result:[],
     specific_action: [],
      mesurable_action: [],
       motivating_action: [],
      ecological_action: [],
      positive_action: [],
      realizable_action: [],
       internal_external_resources: [],
      resources: [],
      obstacles: [],
      deflect_obstacles: []
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

addActionPlan(actionPlan){
  this.submitted = true;
     const formData = JSON.stringify(this.actionPlanForm.value);
     this.http.post('http://localhost:8000/user/action/plan/creation/new', 
     formData)
   .subscribe(
  formData => this.actionPlan.push(this.actionPlanForm.value))
     console.log(formData)
  }
  
}
