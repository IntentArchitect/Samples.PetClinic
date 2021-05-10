import { Component, OnInit } from '@angular/core';
import { PetModel } from './../models/pet.model';
import { PetTypeDTO } from './../../api-access/models/pet-type.dto';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { PetTypesService } from 'src/app/api-access/pet-types-service.service';
import { PetsService } from 'src/app/api-access/pets-service.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent implements OnInit {
  model: PetModel;
  petTypes: PetTypeDTO[];
  ownerId: number;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private petTypesService: PetTypesService, private petsService: PetsService) {
    this.model = PetModel.createEmpty();
   }

  @IntentIgnore()
  ngOnInit() {
    this.ownerId = this.route.snapshot.params.id;
    this.petTypesService.getAllPetTypes()
      .subscribe(types => this.petTypes = types)
  }

  @IntentIgnoreBody()
  save(): void {
    this.petsService.addPet({
      ownerId: this.ownerId,
      name: this.model.name,
      birthDate: this.model.birthDate,
      petTypeId: this.model.petTypeId
    }).subscribe(() => {
      this.goToOwnerDetails(this.ownerId);
    })
  }

  goToOwnerDetails(id: any): void {
    this.router.navigate(["owners", id]);
  }
}
