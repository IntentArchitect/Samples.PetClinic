import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpecialtyFormModel } from './../models/specialty-form.model';
import { SpecialtyDTO } from './../../api-access/models/specialty.dto';
import { IntentIgnore, IntentIgnoreBody } from './../../intent/intent.decorators';
import { SpecialtiesService } from 'src/app/api-access/specialties-service.service';

@Component({
  selector: 'app-specialty-add',
  templateUrl: './specialty-add.component.html',
  styleUrls: ['./specialty-add.component.scss']
})
export class SpecialtyAddComponent implements OnInit {
  @Output() newSpecialty = new EventEmitter<SpecialtyDTO>();
  specialty: SpecialtyFormModel;

  //@IntentCanAdd()
  constructor(private specialtiesService: SpecialtiesService) {
    this.specialty = SpecialtyFormModel.createEmpty();
   }

  @IntentIgnore()
  ngOnInit() {
  }

  @IntentIgnoreBody()
  save(): void {
    this.specialtiesService.addSpecialty({
      id: null,
      name: this.specialty.name
    }).subscribe((id: number) => this.newSpecialty.emit({
      id: id,
      name: this.specialty.name
    }));
  }
}
