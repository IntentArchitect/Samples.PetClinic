import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OwnerDTO } from './models/owner.dto';
import { OwnerCreateDTO } from './models/owner-create.dto';
import { OwnerUpdateDTO } from './models/owner-update.dto';
import { ApiService } from './../core/api.service';

@Injectable()
export class OwnersService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public getOwners(): Observable<OwnerDTO[]> {
    let url = `/api/owners`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public getOwnersList(lastName: string): Observable<OwnerDTO[]> {
    let url = `/api/owners/*/lastname/${lastName}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public getOwner(ownerId: number): Observable<OwnerDTO> {
    let url = `/api/owners/${ownerId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addOwner(owner: OwnerCreateDTO): Observable<boolean> {
    let url = `/api/owners`;
    return this.apiService.post(url, owner)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public updateOwner(ownerId: number, owner: OwnerUpdateDTO): Observable<boolean> {
    let url = `/api/owners/${ownerId}`;
    return this.apiService.put(url, owner)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public deleteOwner(ownerId: number): Observable<boolean> {
    let url = `/api/owners/${ownerId}`;
    return this.apiService.delete(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
