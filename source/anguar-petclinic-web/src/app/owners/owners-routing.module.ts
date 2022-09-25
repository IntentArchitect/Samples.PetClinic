import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { PetAddComponent } from './../pets/pet-add/pet-add.component';
import { TestComponent } from './test/test.component';
import { IntentIgnore } from './../intent/intent.decorators';

const routes: Routes = [
  {
    path: 'owners',
    component: OwnerListComponent
  },
  {
    path: 'owners/add',
    component: OwnerAddComponent
  },
  {
    path: 'owners/:id',
    component: OwnerDetailComponent
  },
  {
    path: 'owners/:id/edit',
    component: OwnerEditComponent
  },
  {
    path: 'owners/:id/pets/add',
    component: PetAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
