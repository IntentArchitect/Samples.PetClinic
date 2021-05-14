import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VetResolver } from './vet-resolver';
import { VetAddComponent } from './vet-add/vet-add.component';
import { VetEditComponent } from './vet-edit/vet-edit.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { VetsRoutingModule } from './vets-routing.module';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@IntentMerge()
@NgModule({
  declarations: [
    VetAddComponent,
    VetEditComponent,
    VetListComponent
  ],
  providers: [
    VetResolver
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VetsRoutingModule,
    MatSelectModule
  ]
})
export class VetsModule { }
