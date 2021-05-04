import { Component, OnInit } from '@angular/core';
import { PetTypeDTO } from './../models/pet-type.dto';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { Router } from '@angular/router';
import { PetTypesService } from '../pet-types-service.service';
import { PetTypeModel } from '../models/pet-type.model';

@Component({
  selector: 'app-pettype-list',
  templateUrl: './pettype-list.component.html',
  styleUrls: ['./pettype-list.component.css']
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
    this.router.navigate(["/"]);
  }

  @IntentIgnore()
  goToUpdate(id: number): void {
    this.router.navigate(["pettypes", id, "edit"]);
  }
}
