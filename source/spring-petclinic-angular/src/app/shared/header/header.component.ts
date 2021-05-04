import { Component } from '@angular/core';
import { IntentIgnore, IntentMerge } from './../../intent/intent.decorators';

@IntentMerge()
@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'angularapp';
}