import { Component, OnInit } from '@angular/core';
import { VisitForm } from './../models/visit-form.model';
import { PetDTO } from './../../api-access/models/pet.dto';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  @IntentIgnore()
  ngOnInit() {
  }

  @IntentIgnoreBody()
  updateVisit(): void {
    // write your business logic here for this command
  }

  goToOwnerDetails(id: any): void {
    this.router.navigate(["owners", id]);
  }
}
