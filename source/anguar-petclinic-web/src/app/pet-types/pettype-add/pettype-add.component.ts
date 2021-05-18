import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PetTypeModel } from './../models/pet-type.model';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { PetTypesService } from 'src/app/api-access/pet-types-service.service';

@Component({
  selector: 'app-pettype-add',
  templateUrl: './pettype-add.component.html',
  styleUrls: ['./pettype-add.component.scss']
})
export class PettypeAddComponent implements OnInit {
  model: PetTypeModel;

  @IntentIgnore()
  @Output() newPetType = new EventEmitter<PetTypeModel>();

  //@IntentCanAdd()
  constructor(private petTypesService: PetTypesService) { 
    this.model = PetTypeModel.createEmpty();
  }

  @IntentIgnore()
  ngOnInit() {
  }

  @IntentIgnoreBody()
  save(): void {
    this.petTypesService.addPetType({
      id: null,
      name: this.model.name
    }).subscribe((petTypeId) => {
      this.model.get("id").setValue(petTypeId);
      this.newPetType.emit(this.model);
    })
  }
}
