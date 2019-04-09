import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm: FormGroup;
  isUserConsenting: false;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
      address: new FormControl('', [Validators.required]),
      consent: new FormControl('', [Validators.requiredTrue])
    });
  }

  login() {
    console.log('Username is ' + this.loginForm.value.username);
    console.log('Address is ' + this.loginForm.value.address);
    console.log('Consent is ' + this.loginForm.value.consent);
  }

  ngOnInit() {}


}
