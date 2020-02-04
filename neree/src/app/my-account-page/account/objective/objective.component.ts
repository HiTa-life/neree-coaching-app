import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss'],
})
export class ObjectiveComponent implements OnInit {
objectiveForm: FormGroup;
submitted = false;

  constructor(private formb: FormBuilder) { }

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
}
