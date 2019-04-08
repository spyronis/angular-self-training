import {  FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      address: new FormControl(''),
    });
  }

  login() {
    console.log('Username is ' + this.loginForm.value.username);
    console.log('Address is ' + this.loginForm.value.address);
  }

  ngOnInit() {
  }

}
