import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({ //crée une instance de FormGroup
      username: ['Jean'],//crée une instance de FormControle /'Jean' est la valeur par défaut du champ "username"
      password: ['1234'],//crée une instance de FormControle
    });
  }

  login(){
    // this.loginForm.get('username')
    //this.loginForm.get('password')
    console.log('Données du formulaire...',this.loginForm.value);
  }

}
