import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { OwnerForm } from './../models/owner-form.model';
import { IntentIgnore, IntentIgnoreBody, IntentManage } from './../../intent/intent.decorators';
import { OwnersService } from 'src/app/api-access/owners-service.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.scss']
})
export class OwnerAddComponent implements OnInit {
  owner: OwnerForm;
  errorMessage: string;
  
  //@IntentCanAdd()
  constructor(private router: Router, private ownersService: OwnersService) { }

  @IntentIgnore()
  ngOnInit() {
    this.owner = OwnerForm.createEmpty();
  }

  @IntentIgnoreBody()
  onSubmit(): void {
    this.ownersService.addOwner({
      firstName: this.owner.firstName,
      lastName: this.owner.lastName,
      address: this.owner.address,
      city: this.owner.city,
      telephone: this.owner.telephone
    }).subscribe(() => {
      this.goBackToList();
    }, error => this.errorMessage = error as any)
  }

  @IntentManage()
  goBackToList(): void {
    this.router.navigate(["owners"]);
  }
}
