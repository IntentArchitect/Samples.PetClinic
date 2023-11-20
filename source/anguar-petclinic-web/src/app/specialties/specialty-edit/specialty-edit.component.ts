import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpecialtyFormModel } from './../models/specialty-form.model';
import { Router, ActivatedRoute } from '@angular/router';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { SpecialtiesService } from 'src/app/api-access/specialties-service.service';

@Component({
  selector: 'app-specialty-edit',
  templateUrl: './specialty-edit.component.html',
  styleUrls: ['./specialty-edit.component.scss']
})
export class SpecialtyEditComponent implements OnInit {
  specialtyId: number;
  specialty: SpecialtyFormModel;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private specialtiesService: SpecialtiesService) {
    this.specialty = SpecialtyFormModel.createEmpty();
   }

  @IntentIgnore()
  ngOnInit() {
    this.specialtyId = this.route.snapshot.params['id'];
    this.specialtiesService.getSpecialty(this.specialtyId)
      .subscribe(result => this.specialty = SpecialtyFormModel.create(result));
  }

  @IntentIgnoreBody()
  onUpdate(): void {
    this.specialtiesService.updateSpecialty(this.specialtyId, {
      id: this.specialtyId,
      name: this.specialty.name
    }).subscribe(() => this.backToList());
  }

  backToList(): void {
    this.router.navigate(["specialties"]);
  }
}
