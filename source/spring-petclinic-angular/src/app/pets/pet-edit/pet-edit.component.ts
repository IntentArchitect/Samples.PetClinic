import { Component, OnInit } from '@angular/core';
import { PetModel } from './../models/pet.model';
import { PetTypeDTO } from './../../api-access/models/pet-type.dto';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerDTO } from './../../api-access/models/owner.dto';
import { PetTypeModel } from './../../pet-types/models/pet-type.model';
import { PetsService } from 'src/app/api-access/pets-service.service';
import { PetTypesService } from 'src/app/api-access/pet-types-service.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {
  petId: number;
  pet: PetModel;
  petTypes: PetTypeDTO[];
  ownerId: number;
  ownerName: string;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private petsService: PetsService, private petTypesService: PetTypesService) {
    this.pet = PetModel.createEmpty();
   }

  @IntentIgnore()
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.petTypesService.getAllPetTypes()
      .subscribe(types => this.petTypes = types);
    this.petsService.getPet(this.petId)
      .subscribe(dto => {
        this.pet = PetModel.create(dto);
        this.ownerName = dto.ownerFirstName + " " + dto.ownerLastName;
        this.ownerId = dto.ownerId;
      })
  }

  @IntentIgnoreBody()
  onUpdate(): void {
    this.petsService.updatePet(this.petId, {
      name: this.pet.name,
      birthDate: this.pet.birthDate,
      petTypeId: this.pet.petTypeId
    }).subscribe(() => this.goToOwnerDetails(this.ownerId))
  }

  goToOwnerDetails(id: any): void {
    this.router.navigate(["owners", id]);
  }
}
