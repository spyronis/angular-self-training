import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  user = {
    username: '',
    address: ''
  }

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('Username is ' + this.user.username);
    console.log('Address is ' + this.user.address);
  }

}
