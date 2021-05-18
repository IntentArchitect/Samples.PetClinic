import { NgModule } from '@angular/core';
import { SpecialtiesService } from './specialties-service.service';
import { VetsService } from './vets-service.service';
import { VisitsService } from './visits-service.service';
import { OwnersService } from './owners-service.service';
import { PetsService } from './pets-service.service';
import { PetTypesService } from './pet-types-service.service';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { ApiAccessRoutingModule } from './api-access-routing.module';
import { CommonModule } from '@angular/common';

@IntentMerge()
@NgModule({
  declarations: [],
  providers: [
    SpecialtiesService,
    VetsService,
    VisitsService,
    OwnersService,
    PetsService,
    PetTypesService
  ],
  imports: [
    CommonModule,
    ApiAccessRoutingModule
  ]
})
export class ApiAccessModule { }
