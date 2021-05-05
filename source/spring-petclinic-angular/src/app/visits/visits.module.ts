import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitEditComponent } from './visit-edit/visit-edit.component';
import { VisitListComponent } from './visit-list/visit-list.component';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { VisitsRoutingModule } from './visits-routing.module';
import { CommonModule } from '@angular/common';
import { ApiAccessModule } from '../api-access/api-access.module';
  

@IntentMerge()
@NgModule({
  declarations: [
    VisitAddComponent,
    VisitEditComponent,
    VisitListComponent
  ],
  exports: [
    VisitAddComponent,
    VisitEditComponent,
    VisitListComponent
  ],
  imports: [
    CommonModule,
    ApiAccessModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    VisitsRoutingModule
  ]
})
export class VisitsModule { }
