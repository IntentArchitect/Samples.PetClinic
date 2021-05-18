import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { VisitAddComponent } from './../visits/visit-add/visit-add.component';
import { IntentIgnore } from './../intent/intent.decorators';

const routes: Routes = [
  {
    path: 'pets',
    component: PetListComponent
  },
  {
    path: 'pets/add',
    component: PetAddComponent
  },
  {
    path: 'pets/:id/edit',
    component: PetEditComponent
  },
  {
    path: 'pets/:id/visits/add',
    component: VisitAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
