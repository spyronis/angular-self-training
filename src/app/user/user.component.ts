import { Component, Input, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() showView = true;
  @Input() user: User = null;

  constructor() {}

  ngOnInit() {
  }

}

export class User {
  name: string;
  url: string;
  nameI: string;
  description: string;

  constructor(name: string, url: string, nameI: string, description: string) {
    this.name = name;
    this.url = url;
    this.nameI = nameI;
    this.description = description;
  }

}


