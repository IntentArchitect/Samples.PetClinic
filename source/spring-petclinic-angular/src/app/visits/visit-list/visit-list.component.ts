import { Component, OnInit, Input } from '@angular/core';
import { PetVisitDTO } from './../../api-access/models/pet-visit.dto';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { Router } from '@angular/router';
import { VisitsService } from 'src/app/api-access/visits-service.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {
  @IntentIgnore()
  @Input() visits: PetVisitDTO[];

  //@IntentCanAdd()
  constructor(private router: Router, private visitService: VisitsService) { }

  @IntentIgnore()
  ngOnInit() {
  }

  @IntentIgnoreBody()
  deleteVisit(visitId: number): void {
    this.visitService.deleteVisit(visitId)
      .subscribe(() => {
        this.visits.splice(this.visits.findIndex(x => x.id == visitId), 1);
      })
  }

  goToEdit(id: any): void {
    this.router.navigate(["visits", id, "edit"]);
  }
}
