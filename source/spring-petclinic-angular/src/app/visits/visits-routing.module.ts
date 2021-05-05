import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitListComponent } from './visit-list/visit-list.component';
import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitEditComponent } from './visit-edit/visit-edit.component';
import { IntentIgnore } from './../intent/intent.decorators';

const routes: Routes = [
  {
    path: 'visits',
    component: VisitListComponent
  },
  {
    path: 'visits/add',
    component: VisitAddComponent
  },
  {
    path: 'visits/:id/edit',
    component: VisitEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
