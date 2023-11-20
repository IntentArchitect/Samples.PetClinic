import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';import { OwnerDTO } from './../models/application/dtos/owner.dto';
import { OwnerCreateDTO } from './../models/application/dtos/owner-create.dto';
import { OwnerUpdateDTO } from './../models/application/dtos/owner-update.dto';
import { ApiService } from './../core/api.service';


@Injectable()
export class OwnersService {
  constructor(private apiService: ApiService) {
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

  public addOwner(dto: OwnerCreateDTO): Observable<void> {
    let url = `/api/owners`;
    return this.apiService.post(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public updateOwner(ownerId: number, dto: OwnerUpdateDTO): Observable<void> {
    let url = `/api/owners/${ownerId}`;
    return this.apiService.put(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public deleteOwner(ownerId: number): Observable<void> {
    let url = `/api/owners/${ownerId}`;
    return this.apiService.delete(url, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }
}
