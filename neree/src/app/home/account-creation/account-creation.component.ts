import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss'],
})

export class AccountCreationComponent implements OnInit {
  accountForm: FormGroup;
  submitted = false;
  errorMessage: string;

  user: User[] = [];
  // headers: string[];
  spresp: any;
  postdata: User;
  data: User;
  isLoading: boolean = false;
  errors: string = '';
  message : string;

  constructor(
    private formb: FormBuilder,
    private router: Router,
    private userService: UserService, 
    private authenticationService: AuthenticationService,
    private http: HttpClient) 

    { if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }}

  @Output()
  userAdded: EventEmitter<User> = new EventEmitter<User>();

  ngOnInit() {
    this.accountForm = this.formb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      // role: ['', Validators.required],
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
      // }, {
      //   validator: MustMatch('password', 'confirmPassword')
      // });
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
    alert('SUCCESS!! :-)\n\n'
      + JSON.stringify(this.accountForm.value, null, 4));
    this.addUsers(this.user);

  }

  onReset() {
    this.submitted = false;
    this.accountForm.reset();
  }

  getUsers() {
   this.userService
     .getUser()
     .subscribe(
       users => {
         this.user = users;
          console.log(users);
        },
        error => this.errorMessage = <any>error
      );
  }




  addUsers(user) {
    this.isLoading = true;
    this.userService
      .postUser(user)
      .subscribe(
        user => {
          this.isLoading = false;
          user.isUpdating = false;
          this.userAdded.emit(user);
          this.message = "Bravo ! Votre compte est créé !"
        },
        error => {
          this.errors = error.json().errors;
          this.isLoading = false;
          console.log(user);
        }
      )
  }

  addUser(user){
    this.submitted = true;
       const formData = JSON.stringify(this.accountForm.value);
       this.http.post('http://localhost:8000/user/account/creation/new', 
       formData)
     .subscribe(
    formData => this.user.push(this.accountForm.value))
       console.log(formData)
    }

    editUser(){
      this.submitted = true;
         const formData = JSON.stringify(this.accountForm.value);
         this.http.put('http://localhost:8000/user/account/creation/{id}/edit', 
         formData)
       .subscribe(
      formData => this.user.push(this.accountForm.value))
         console.log(formData)
      }





   // .postUser(this.postdata)
   // .subscribe(resp => {
   //   return this.spresp.push(resp);
  //  });
 // }

 deleteOneUser(id: number){
   this.userService
   .deleteUser(id)
   .subscribe(resp => {
      return this.spresp.push(resp);
   });
 }
}

 // getUserById(id: number){
 //   this.userService.getUserById(id)
  //  .subscribe(data => {
  //    console.log(data);
//    });
//  }


        // for (const d of (data as any)){
        //     this.user.push({
        //       name: d.name,
        //       surname: d.surname,
        //       phone: d.phone,
        //       email: d.email,
        //       function: d.function,
        //       name_society: d.name_society,
        //       address_society: d.address_society,
        //       phone_society: d.phone_society,
        //       coach_name: d.coach_name,
        //       coaching_beginning: d.coaching_beginning,
        //       accept_terms: d.accept_terms,
        //       role: d.role
        //     });
        //   }
        //   console.log(this.user);
        // });





        // custom validator to check that two fields match
        // export function MustMatch(controlName: string, matchingControlName: string) {
        //   return (formGroup: FormGroup) => {
        //     const control = formGroup.controls[controlName];
        //     const matchingControl = formGroup.controls[matchingControlName];

        //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        //       // return if another validator has already found an error on the matchingControl
        //       return;
        //     }

        //     // set error on matchingControl if validation fails
        //     if (control.value !== matchingControl.value) {
        //       matchingControl.setErrors({ mustMatch: true });
        //     } else {
        //       matchingControl.setErrors(null);
        //     }
        //   }



