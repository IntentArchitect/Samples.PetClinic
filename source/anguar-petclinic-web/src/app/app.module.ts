import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { IntentIgnore, IntentMerge } from './intent/intent.decorators';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PartsModule } from './parts/parts.module';
import { OwnersModule } from './owners/owners.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetTypesModule } from './pet-types/pet-types.module';
import { ApiAccessModule } from './api-access/api-access.module';
import { VisitsModule } from './visits/visits.module';
import { VetsModule } from './vets/vets.module';
import { PetsModule } from './pets/pets.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SpecialtiesModule } from './specialties/specialties.module';
import { RouterModule } from '@angular/router';

@IntentMerge()
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CollapseModule.forRoot(),
    CoreModule,
    PetTypesModule,
    ApiAccessModule,
    VisitsModule,
    VetsModule,
    PetsModule,
    OwnersModule,
    PartsModule,
    BsDropdownModule.forRoot(),
    SpecialtiesModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
