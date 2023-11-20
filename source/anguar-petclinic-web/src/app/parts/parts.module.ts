import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { CommonModule } from '@angular/common';

@IntentMerge()
@NgModule({
  declarations: [
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    PageNotFoundComponent,
    WelcomeComponent
  ]
})
export class PartsModule { }
