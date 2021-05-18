import { Component, OnInit } from '@angular/core';
import { IntentIgnore } from './../../intent/intent.decorators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  //@IntentCanAdd()
  constructor() { }

  @IntentIgnore()
  ngOnInit() {
  }
}
