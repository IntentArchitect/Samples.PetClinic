import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetAddComponent } from './vet-add/vet-add.component';
import { VetEditComponent } from './vet-edit/vet-edit.component';
import { IntentIgnore } from './../intent/intent.decorators';
import { VetResolver } from './vet-resolver';

const routes: Routes = [
  {
    path: 'vets',
    component: VetListComponent
  },
  {
    path: 'vets/add',
    component: VetAddComponent
  },
  {
    path: 'vets/:id/edit',
    component: VetEditComponent,
    resolve: {vet: VetResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetsRoutingModule { }
