import { Component, OnInit, Input } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { UserComponent, User } from '../user/user.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  @Input() name = 'John';
  surname = 'Spyronis';

  users = [new User('John Spy',
  'https://www.arhs-group.com/wp-content/uploads/2016/07/home.jpg',
  'home media', 'lorem ipsum 1'),

  new User('Kostas Be',
  'https://www.arhs-group.com/wp-content/uploads/2016/07/All-about-us1.jpg',
  'all about us media', 'lorem ipsum 2'),

  new User('Takis Sep', 
  'https://www.arhs-group.com/wp-content/uploads/2016/09/Expertise.jpg', 
  'expertise media', 'lorem ipsum 3')];

  @Input() showFull = true;

  constructor() {}

  ngOnInit() {
  }

  clickToChangeName() {
    this.name = 'Giannis';
  }

  onKeyUpChangeSurname(event: any) {
    this.surname = event.target.value;
  }

  clickToMakeCompact() {
    this.showFull = false;
  }
  clickToFullView() {
    this.showFull = true;
  }



}
