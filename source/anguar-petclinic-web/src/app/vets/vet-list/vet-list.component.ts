import { Component, OnInit } from '@angular/core';
import { VetDTO } from './../../models/application/dtos/vet.dto';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { VetsService } from './../../api-access/vets-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
  vets: VetDTO[];

  //@IntentCanAdd()
  constructor(private vetsService: VetsService, private router: Router) { }

  @IntentIgnore()
  ngOnInit() {
    this.vetsService.getAllVets()
      .subscribe(result => this.vets = result);
  }

  @IntentIgnoreBody()
  deleteVet(vetId: number): void {
    this.vetsService.deleteVet(vetId)
      .subscribe(() => this.vets.splice(this.vets.findIndex(x => x.id == vetId), 1));
  }

  goToAdd(): void {
    this.router.navigate(["vets", "add"]);
  }

  goToHome(): void {
    this.router.navigate(["welcome"]);
  }

  goToEdit(id: any): void {
    this.router.navigate(["vets", id, "edit"]);
  }
}
