import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formb.group({ //crée une instance de FormGroup
      email: ['',Validators.required],//crée une instance de FormControle /'Jean' est la valeur par défaut du champ "username"
      password: ['',Validators.required],//crée une instance de FormControle
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.loginForm.reset();
}

}
