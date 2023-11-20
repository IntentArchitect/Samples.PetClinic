import { Component, OnInit } from '@angular/core';
import { VetFormModel } from './../models/vet-form.model';
import { SpecialtyDTO } from './../../models/application/dtos/specialty.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { SpecialtiesService } from './../../api-access/specialties-service.service';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { VetsService } from 'src/app/api-access/vets-service.service';

@Component({
  selector: 'app-vet-edit',
  templateUrl: './vet-edit.component.html',
  styleUrls: ['./vet-edit.component.scss']
})
export class VetEditComponent implements OnInit {
  vet: VetFormModel;
  specialties: SpecialtyDTO[];

  //@IntentCanAdd()
  constructor(private specialtiesService: SpecialtiesService, private vetsService: VetsService, private router: Router, private route: ActivatedRoute) {
    this.vet = VetFormModel.createEmpty();
  }

  @IntentIgnore()
  ngOnInit() {
    var dto = this.route.snapshot.data['vet'];
    this.vet = VetFormModel.create(dto);
    this.specialtiesService.getAllSpecialties()
      .subscribe(result => this.specialties = result);
  }

  @IntentIgnoreBody()
  saveVet(): void {
    this.vetsService.updateVet(this.vet.id, {
      firstName: this.vet.firstName,
      lastName: this.vet.lastName,
      specialties: this.vet.specialties
    }).subscribe(() => this.goBackToList());
  }

  goBackToList(): void {
    this.router.navigate(["vets"]);
  }
}
