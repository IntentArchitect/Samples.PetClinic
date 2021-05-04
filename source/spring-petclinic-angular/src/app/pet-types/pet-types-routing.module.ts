import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettypeListComponent } from './pettype-list/pettype-list.component';
import { PettypeAddComponent } from './pettype-add/pettype-add.component';
import { PettypeEditComponent } from './pettype-edit/pettype-edit.component';
import { IntentIgnore } from './../intent/intent.decorators';

const routes: Routes = [
  {
    path: 'pettypes',
    component: PettypeListComponent
  },
  {
    path: 'pettypes/add',
    component: PettypeAddComponent
  },
  {
    path: 'pettypes/:id/edit',
    component: PettypeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetTypesRoutingModule { }
