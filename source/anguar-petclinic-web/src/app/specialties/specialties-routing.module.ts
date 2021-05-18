import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialtyListComponent } from './specialty-list/specialty-list.component';
import { SpecialtyEditComponent } from './specialty-edit/specialty-edit.component';
import { IntentIgnore } from './../intent/intent.decorators';

const routes: Routes = [
  {
    path: 'specialties',
    component: SpecialtyListComponent
  },
  {
    path: 'specialties/:id/edit',
    component: SpecialtyEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialtiesRoutingModule { }
