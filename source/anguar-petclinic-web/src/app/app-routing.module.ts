import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './parts/welcome/welcome.component';
import { PageNotFoundComponent } from './parts/page-not-found/page-not-found.component';
import { IntentIgnore } from './intent/intent.decorators';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
