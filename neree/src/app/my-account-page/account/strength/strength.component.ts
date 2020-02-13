import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Strength } from './strength';
import { StrengthService } from './strength.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss'],
})
export class StrengthComponent implements OnInit {
  strengthForm: FormGroup;
  submitted = false;
  errorMessage: string;

  strength: Strength[] =[];
  spresp: any;
  postdata: Strength;
  data: Strength;

  constructor(private formb: FormBuilder,
    private strengthService: StrengthService, 
    private http: HttpClient) { }

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

getStrengths(){
  this.strengthService
  .getStrength()
  .subscribe(
    strengths => {
      this.strength = strengths;
      console.log(strengths)
    },
    error => this.errorMessage = <any>error
  );
}

addStrength(strength){
this.submitted = true;
   const formData = JSON.stringify(this.strengthForm.value);
   this.http.post('http://localhost:8000/user/energy/values/creation/new', 
   formData)
 .subscribe(
formData => this.strength.push(this.strengthForm.value))
   console.log(formData)
}

}
