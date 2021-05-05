import { Component, OnInit } from '@angular/core';
import { PetTypeModel } from './../models/pet-type.model';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { PetTypesService } from 'src/app/api-access/pet-types-service.service';

@Component({
  selector: 'app-pettype-edit',
  templateUrl: './pettype-edit.component.html',
  styleUrls: ['./pettype-edit.component.css']
})
export class PettypeEditComponent implements OnInit {
  model: PetTypeModel;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private petTypesService: PetTypesService) {
    this.model = PetTypeModel.createEmpty();
   }

  @IntentIgnore()
  ngOnInit() {
    const petTypeId = this.route.snapshot.params.id;
    this.petTypesService.getPetType(petTypeId)
    .subscribe((dto) => {
      this.model = PetTypeModel.create(dto);
    })
  }

  @IntentIgnoreBody()
  onUpdate(): void {
    this.petTypesService.updatePetType(this.model.id, {
      id: this.model.id,
      name: this.model.name
    }).subscribe((dto) => {
      this.backToList();
    })
  }

  @IntentManage()
  backToList(): void {
    this.router.navigate(["pettypes"]);
  }
}
