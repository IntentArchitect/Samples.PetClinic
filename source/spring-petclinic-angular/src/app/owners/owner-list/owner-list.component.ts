import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { OwnerDTO } from './../models/owner.dto';
import { IntentIgnore, IntentManage, IntentIgnoreBody } from './../../intent/intent.decorators';
import { OwnersService } from '../owners-service.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: OwnerDTO[];

  //@IntentCanAdd()
  constructor(private router: Router, private ownersService: OwnersService) { }

  @IntentIgnore()
  ngOnInit() {
    this.ownersService.getOwners()
      .subscribe(result => this.owners = result);
  }

  @IntentManage()
  onSelected(ownerId: number): void {
    this.router.navigate(["owners", ownerId]);
  }

  @IntentManage()
  goToAdd(): void {
    this.router.navigate(["owners/add"]);
  }

  @IntentManage()
  goToDetails(): void {
    this.router.navigate(["owners/:id"]);
  }

}
