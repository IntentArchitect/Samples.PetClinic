import { Component } from '@angular/core';
import { IntentIgnore, IntentMerge } from './../../intent/intent.decorators';

@IntentMerge()
@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
}