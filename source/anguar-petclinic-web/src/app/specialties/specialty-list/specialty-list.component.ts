import { Component, OnInit } from '@angular/core';
import { IntentIgnore, IntentIgnoreBody, IntentManageClass } from './../../intent/intent.decorators';
import { SpecialtyDTO } from './../../models/application/dtos/specialty.dto';
import { Router } from '@angular/router';
import { SpecialtiesService } from 'src/app/api-access/specialties-service.service';

@Component({
  selector: 'app-specialty-list',
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.scss']
})
export class SpecialtyListComponent implements OnInit {
  specialties: SpecialtyDTO[];
  isAddVisible: boolean;
  errorMessage: string;

  //@IntentCanAdd()
  constructor(private router: Router, private specialtiesService: SpecialtiesService) { }

  @IntentIgnore()
  ngOnInit() {
    this.specialtiesService.getAllSpecialties()
      .subscribe(result => this.specialties = result);
  }

  @IntentIgnoreBody()
  toggleShowAdd(): void {
    this.isAddVisible = !this.isAddVisible;
  }

  @IntentIgnoreBody()
  deleteSpecialty(specialtyId: number): void {
    this.specialtiesService.deleteSpecialty(specialtyId)
      .subscribe(() => {
        this.specialties.splice(this.specialties.findIndex(x => x.id == specialtyId), 1);
      })
  }

  goToEdit(id: any): void {
    this.router.navigate(["specialties", id, "edit"]);
  }

  goToHome(): void {
    this.router.navigate(["welcome"]);
  }

  @IntentIgnore()
  onNewSpecialty(newSpecialty: SpecialtyDTO) {
    this.specialties.push(newSpecialty);
    this.isAddVisible = false;
  }
}
