import { Component, OnInit } from '@angular/core';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { PetTypeDTO } from './../../api-access/models/pet-type.dto';
import { Router } from '@angular/router';
import { PetTypeModel } from '../models/pet-type.model';
import { PetTypesService } from 'src/app/api-access/pet-types-service.service';

@Component({
  selector: 'app-pettype-list',
  templateUrl: './pettype-list.component.html',
  styleUrls: ['./pettype-list.component.scss']
})
export class PettypeListComponent implements OnInit {
  petTypes: PetTypeDTO[];
  isAddVisible: boolean;
  errorMessage: string;

  //@IntentCanAdd()
  constructor(private router: Router, private petTypesService: PetTypesService) {
    this.isAddVisible = false;
    this.petTypes = [];
   }

  @IntentIgnore()
  ngOnInit() {
    this.petTypesService.getAllPetTypes()
      .subscribe(
        result => this.petTypes = result,
        error => this.errorMessage = error as any);

  }

  @IntentIgnoreBody()
  toggleShowAdd(): void {
    this.isAddVisible = !this.isAddVisible;
  }

  @IntentIgnoreBody()
  deletePetType(petTypeId: number): void {
    this.petTypesService.deletePetType(petTypeId)
      .subscribe(
        () => {
          this.petTypes = this.petTypes.filter(currentItem => !(currentItem.id === petTypeId));
        },
        error => this.errorMessage = error as any);

  }

  @IntentIgnore()
  onNewPetType(newPetType: PetTypeModel) {
    this.petTypes.push({
      id: newPetType.id,
      name: newPetType.name
    });
    this.toggleShowAdd();
  }

  @IntentManage()
  goToHome(): void {
    this.router.navigate(["welcome"]);
  }

  @IntentIgnore()
  goToUpdate(id: number): void {
    this.router.navigate(["pettypes", id, "edit"]);
  }
}
