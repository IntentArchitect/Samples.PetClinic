import { Component, OnInit } from '@angular/core';
import { OwnerForm } from './../models/owner-form.model';
import { IntentIgnore, IntentIgnoreBody, IntentManage, IntentMerge } from './../../intent/intent.decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { OwnersService } from 'src/app/api-access/owners-service.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss']
})
export class OwnerEditComponent implements OnInit {
  ownerId: number;

  @IntentMerge()
  owner: OwnerForm = OwnerForm.createEmpty();
  errorMessage: string;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private ownersService: OwnersService) { }

  @IntentIgnore()
  ngOnInit() {
    this.ownerId = this.route.snapshot.params.id;
    this.ownersService.getOwner(this.ownerId).subscribe(
      dto => this.owner = OwnerForm.create(dto),
      error => this.errorMessage = error as any);
  }

  @IntentIgnoreBody()
  onSubmit(): void {
    this.ownersService.updateOwner(this.owner.id, {
      firstName: this.owner.firstName,
      lastName: this.owner.lastName,
      address: this.owner.address,
      city: this.owner.city,
      telephone: this.owner.telephone
    }).subscribe(() => {
      this.goBackToDetails(this.owner.id);
    })
  }

  goBackToDetails(id: any): void {
    this.router.navigate(["owners", id]);
  }
}
