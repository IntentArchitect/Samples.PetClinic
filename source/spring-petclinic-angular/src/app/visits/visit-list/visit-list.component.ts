import { Component, OnInit, Input } from '@angular/core';
import { PetVisitDTO } from './../../api-access/models/pet-visit.dto';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {
  @IntentIgnore()
  @Input() visits: PetVisitDTO[];

  //@IntentCanAdd()
  constructor(private router: Router) { }

  @IntentIgnore()
  ngOnInit() {
  }

  @IntentIgnoreBody()
  deleteVisit(): void {
    // write your business logic here for this command
  }

  goToEdit(id: any): void {
    this.router.navigate(["visits", id, "edit"]);
  }
}
