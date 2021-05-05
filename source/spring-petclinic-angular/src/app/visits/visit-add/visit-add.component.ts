import { Component, OnInit } from '@angular/core';
import { VisitForm } from './../models/visit-form.model';
import { PetDTO } from './../../api-access/models/pet.dto';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { PetsService } from 'src/app/api-access/pets-service.service';
import { VisitsService } from 'src/app/api-access/visits-service.service';

@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent implements OnInit {
  petId: number;
  visit: VisitForm;
  pet: PetDTO;
  ownerId: number;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private petsService: PetsService, private visitsService: VisitsService) { 
    this.visit = VisitForm.createEmpty();
  }

  @IntentIgnore()
  ngOnInit() {
    this.petId = this.route.snapshot.params.id;
    this.petsService.getPet(this.petId)
      .subscribe(dto => {
        this.pet = dto;
        this.ownerId = dto.ownerId;
      });
  }

  @IntentIgnoreBody()
  addVisit(): void {
    this.visitsService.addVisit({
      petId: this.petId,
      visitDate: this.visit.visitDate,
      description: this.visit.description
    }).subscribe(() => {
      this.goToOwnerDetails(this.ownerId);
    })
  }

  goToOwnerDetails(id: any): void {
    this.router.navigate(["owners", id]);
  }
}
