import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
valueForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.valueForm = this.fb.group({
      valueName: [],
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
  console.log('Données du formulaire...', this.valueForm.value)
}

}
