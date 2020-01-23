import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss'],
})
export class StrengthComponent implements OnInit {
  strengthForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.strengthForm = this.fb.group({
      strengthName: [],
      actuallyNotation: [],
      expectedNotation: [],
      actionOne: [],
      actionTwo: [],
      actionThree: [],
      actionFour: [],
      actionFive: [], 
    });
  }
energyValue(){
  console.log('Données du formulaire...', this.strengthForm.value)
}

}
