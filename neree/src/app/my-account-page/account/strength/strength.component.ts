import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss'],
})
export class StrengthComponent implements OnInit {
  strengthForm: FormGroup;
  submitted = false;

  constructor(private formb: FormBuilder) { }

  ngOnInit() {
    this.strengthForm = this.formb.group({
      strength_name: [],
      actually_notation: [],
      expected_notation: [],
      action_one: [],
      action_two: [],
      action_three: [],
      action_four: [],
      action_five: [], 
    });
  }
  get f() { return this.strengthForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.strengthForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.strengthForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.strengthForm.reset();
}

}
