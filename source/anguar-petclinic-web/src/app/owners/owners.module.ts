import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { TestComponent } from './test/test.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { OwnersRoutingModule } from './owners-routing.module';
import { CommonModule } from '@angular/common';
import { PetsModule } from '../pets/pets.module';
import { ApiAccessModule } from '../api-access/api-access.module';

@IntentMerge()
@NgModule({
  declarations: [
    OwnerAddComponent,
    OwnerDetailComponent,
    OwnerEditComponent,
    OwnerListComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    ApiAccessModule,
    ReactiveFormsModule,
    FormsModule,
    OwnersRoutingModule,
    PetsModule
  ]
})
export class OwnersModule { }
