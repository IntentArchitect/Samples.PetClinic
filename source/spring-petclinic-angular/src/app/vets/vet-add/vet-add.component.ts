import { Component, OnInit } from '@angular/core';
import { VetFormModel } from './../models/vet-form.model';
import { SpecialtyDTO } from './../../api-access/models/specialty.dto';
import { SpecialtiesService } from './../../api-access/specialties-service.service';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { Router } from '@angular/router';
import { VetsService } from 'src/app/api-access/vets-service.service';

@Component({
  selector: 'app-vet-add',
  templateUrl: './vet-add.component.html',
  styleUrls: ['./vet-add.component.scss']
})
export class VetAddComponent implements OnInit {
  vet: VetFormModel;
  specialties: SpecialtyDTO[];

  //@IntentCanAdd()
  constructor(private specialtiesService: SpecialtiesService, private vetsService: VetsService, private router: Router) { 
    this.vet = VetFormModel.createEmpty();
  }

  @IntentIgnore()
  ngOnInit() {
    this.specialtiesService.getAllSpecialties()
      .subscribe(result => this.specialties = result);
  }

  @IntentIgnoreBody()
  saveVet(): void {
    this.vetsService.addVet({
      firstName: this.vet.firstName,
      lastName: this.vet.lastName,
      specialties: this.vet.specialties
    }).subscribe(() => {
      this.goBackToList();
    })
  }

  goBackToList(): void {
    this.router.navigate(["vets"]);
  }
}
