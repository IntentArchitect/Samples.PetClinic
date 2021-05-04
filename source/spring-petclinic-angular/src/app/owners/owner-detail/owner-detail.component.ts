import { Component, OnInit } from '@angular/core';
import { OwnerDTO } from './../models/owner.dto';
import { IntentIgnore, IntentManage, IntentMerge } from './../../intent/intent.decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnersService } from '../owners-service.service';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {

  @IntentMerge()
  owner: OwnerDTO = {} as OwnerDTO;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private ownersService: OwnersService) { }

  @IntentIgnore()
  ngOnInit() {
    const ownerId = this.route.snapshot.params.id;
    this.ownersService.getOwner(ownerId)
      .subscribe(dto => this.owner = dto);
  }

  @IntentManage()
  goToEdit(): void {
    this.router.navigate(["owners", this.owner.id ,"edit"]);
  }

  @IntentManage()
  goBackToList(): void {
    this.router.navigate(["owners"]);
  }
}
