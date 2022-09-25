import { Component, OnInit, Input } from '@angular/core';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { PetDTO } from './../../api-access/models/pet.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @IntentIgnore()
  @Input() pet: PetDTO;
  errorMessage: string;

  //@IntentCanAdd()
  constructor(private router: Router) { }

  @IntentIgnore()
  ngOnInit() {
    console.warn(this.pet);
  }

  @IntentIgnoreBody()
  deletePet(): void {
    // write your business logic here for this command
  }

  goToAddVisit(id: any): void {
    this.router.navigate(["pets", id, "visits", "add"]);
  }

  goToEdit(id: any): void {
    this.router.navigate(["pets", id, "edit"]);
  }
}
