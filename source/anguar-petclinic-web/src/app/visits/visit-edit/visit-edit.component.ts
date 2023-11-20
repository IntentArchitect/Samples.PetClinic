import { Component, OnInit } from '@angular/core';
import { VisitForm } from './../models/visit-form.model';
import { PetDTO } from './../../models/application/dtos/pet.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { VisitsService } from 'src/app/api-access/visits-service.service';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.scss']
})
export class VisitEditComponent implements OnInit {
  visitId: number;
  visit: VisitForm;
  pet: PetDTO;
  ownerId: number;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private visitsService: VisitsService) { }

  @IntentIgnore()
  ngOnInit() {
    this.visitId = this.route.snapshot.params['id'];
    this.visitsService.getVisit(this.visitId)
      .subscribe(dto => {
        this.visit = VisitForm.create(dto);
        this.ownerId = dto.ownerId;
        this.pet = dto.pet;
      })
  }

  @IntentIgnoreBody()
  updateVisit(): void {
    this.visitsService.updateVisit(this.visitId, {
      description: this.visit.description,
      visitDate: this.visit.visitDate
    }).subscribe(() => {
      this.goToOwnerDetails(this.ownerId);
    })
  }

  goToOwnerDetails(id: any): void {
    this.router.navigate(["owners", id]);
  }
}
