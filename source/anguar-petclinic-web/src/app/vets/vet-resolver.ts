import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { VetDTO } from './../models/application/dtos/vet.dto';
import { IntentIgnore, IntentIgnoreBody } from './../intent/intent.decorators';
import { VetsService } from '../api-access/vets-service.service';

@Injectable()
export class VetResolver implements Resolve<VetDTO> {

  //@IntentCanAdd()
  constructor(private vetsService: VetsService) { }

  @IntentIgnoreBody()
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VetDTO> | Promise<VetDTO> | VetDTO {
    var vetId = parseInt(route.paramMap.get("id"));
    return this.vetsService.getVet(vetId);
  }
}
