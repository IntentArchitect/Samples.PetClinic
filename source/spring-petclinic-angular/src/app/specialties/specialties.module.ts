import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpecialtyAddComponent } from './specialty-add/specialty-add.component';
import { SpecialtyEditComponent } from './specialty-edit/specialty-edit.component';
import { SpecialtyListComponent } from './specialty-list/specialty-list.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { CommonModule } from '@angular/common';
  

@IntentMerge()
@NgModule({
  declarations: [
    SpecialtyAddComponent,
    SpecialtyEditComponent,
    SpecialtyListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SpecialtiesRoutingModule
  ]
})
export class SpecialtiesModule { }
