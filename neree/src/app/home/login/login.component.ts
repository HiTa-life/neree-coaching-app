import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: '';
  

  constructor(
    private formb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService) {

      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
     }

  ngOnInit() {

    this.loginForm = this.formb.group({ //crée une instance de FormGroup
      username: ['',Validators.required],//crée une instance de FormControle /'Jean' est la valeur par défaut du champ "username"
      password: ['',Validators.required],//crée une instance de FormControle
      acceptTerms: [false, Validators.requiredTrue]
    });

     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['https://localhost:8100/account'] || '/';
  }
  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value,
      this.f.password.value)
      .pipe(first())
      .subscribe(
        data=>{
          localStorage.setItem('id_token', data.token)
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      )

    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.loginForm.reset();
}

}
