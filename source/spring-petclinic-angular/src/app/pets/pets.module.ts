import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSelectModule } from 'ngx-select-ex';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { PetsRoutingModule } from './pets-routing.module';
import { CommonModule } from '@angular/common';
import { ApiAccessModule } from '../api-access/api-access.module';
import { PetsService } from '../api-access/pets-service.service';
import { VisitsModule } from '../visits/visits.module';
  

@IntentMerge()
@NgModule({
  declarations: [
    PetAddComponent,
    PetEditComponent,
    PetListComponent
  ],
  exports: [
    PetAddComponent,
    PetEditComponent,
    PetListComponent
  ],
  providers: [
    PetsService,
  ],
  imports: [
    CommonModule,
    VisitsModule,
    ApiAccessModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgxSelectModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
