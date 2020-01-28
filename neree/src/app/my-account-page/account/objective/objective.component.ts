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
      num: ['', Validators.required],
      objective_title: ['', Validators.required],
      description: ['', Validators.required],
      beginning_date: ['', Validators.required],
      end_Date: [''],
      strength_title: ['', Validators.required],
      action_plan_title: ['',Validators.required],
      obstacles: [''],
      bypass: [''],
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
