import { Component, OnInit } from '@angular/core';
import { IntentIgnore } from './../../intent/intent.decorators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //@IntentCanAdd()
  constructor() { }

  @IntentIgnore()
  ngOnInit() {
  }
}
