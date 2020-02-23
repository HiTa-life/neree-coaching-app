import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Objective } from './objective';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss'],
})
export class ObjectiveComponent implements OnInit {
objectiveForm: FormGroup;
submitted = false;
objective: Objective[] = [];

  constructor(private formb: FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    this.objectiveForm = this.formb.group({      
      objective_title: ['', Validators.required],     
      beginning_date: ['', Validators.required],
      understandable_objective: [],
      personal_objective:[],
      realizable_objective: [],
      ambitious_objective:[],
      mesurable_action: [],
      ecological_action: [],            
    })
  }
  get f() { return this.objectiveForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.objectiveForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.objectiveForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.objectiveForm.reset();
}

addObjective(objective){
  this.submitted = true;
     const formData = JSON.stringify(this.objectiveForm.value);
     this.http.post('http://localhost:8000/user/objective/creation/new', 
     formData)
   .subscribe(
  formData => this.objective.push(this.objectiveForm.value))
     console.log(formData)
  }
}
