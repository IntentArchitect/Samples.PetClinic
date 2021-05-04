import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnersService } from './owners-service.service';
import { IntentIgnore, IntentMerge } from './../intent/intent.decorators';
import { OwnersRoutingModule } from './owners-routing.module';
import { CommonModule } from '@angular/common';

@IntentMerge()
@NgModule({
  declarations: [
    OwnerAddComponent,
    OwnerDetailComponent,
    OwnerEditComponent,
    OwnerListComponent
  ],
  providers: [
    OwnersService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    OwnersRoutingModule
  ]
})
export class OwnersModule { }
