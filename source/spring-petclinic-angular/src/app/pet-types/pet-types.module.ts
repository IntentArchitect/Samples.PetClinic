import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PettypeAddComponent } from './pettype-add/pettype-add.component';
import { PettypeEditComponent } from './pettype-edit/pettype-edit.component';
import { PettypeListComponent } from './pettype-list/pettype-list.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { PetTypesRoutingModule } from './pet-types-routing.module';
import { CommonModule } from '@angular/common';
import { ApiAccessModule } from '../api-access/api-access.module';
  

@IntentMerge()
@NgModule({
  declarations: [
    PettypeAddComponent,
    PettypeEditComponent,
    PettypeListComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    ApiAccessModule,
    ReactiveFormsModule,
    FormsModule,
    PetTypesRoutingModule
  ]
})
export class PetTypesModule { }
