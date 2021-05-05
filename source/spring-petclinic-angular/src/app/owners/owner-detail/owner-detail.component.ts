import { Component, OnInit } from '@angular/core';
import { OwnerDTO } from './../../api-access/models/owner.dto';
import { IntentIgnore, IntentManage, IntentMerge } from './../../intent/intent.decorators';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnersService } from 'src/app/api-access/owners-service.service';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  ownerId: number;

  @IntentMerge()
  owner: OwnerDTO = {} as OwnerDTO;

  //@IntentCanAdd()
  constructor(private router: Router, private route: ActivatedRoute, private ownersService: OwnersService) { }

  @IntentIgnore()
  ngOnInit() {
    this.ownerId = this.route.snapshot.params.id;
    this.ownersService.getOwner(this.ownerId)
      .subscribe(dto => {
        this.owner = dto
        console.warn(dto);
      });
  }

  goToEdit(id: any): void {
    this.router.navigate(["owners", id, "edit"]);
  }

  goToAddPet(id: any): void {
    this.router.navigate(["owners", id, "pets", "add"]);
  }

  goBackToList(): void {
    this.router.navigate(["owners"]);
  }
}
