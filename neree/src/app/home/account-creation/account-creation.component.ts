import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss'],
})

export class AccountCreationComponent implements OnInit {
  accountForm: FormGroup;
  submitted = false;

  constructor(private formb: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.formb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      function: ['', Validators.required],
      name_society: ['', Validators.required],
      address_society: [''],
      phone_society: [''],
      coach_name: [''],
      coaching_beginning: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
      accept_terms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
    // convenience getter for easy access to form fields
    get f() { return this.accountForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.accountForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.accountForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.accountForm.reset();
  }

}
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
