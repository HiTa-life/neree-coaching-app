import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss'],
})

export class AccountCreationComponent implements OnInit {
accountForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.fb.group({ 
      name: [],
      surname: [],
      phone: [],
      email: [],
      function: [],
      nameSociety: [],
      addressSociety: [],
      phoneSociety: [],
      coachName: [],
      coachingBeginning: [],
      password:[],
      passwordValidation: [],      
    });
  }

  account(){
    console.log('Données du formulaire...', this.accountForm.value);
  }

}
