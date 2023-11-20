import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';import { PetTypeDTO } from './../models/application/dtos/pet-type.dto';
import { ApiService } from './../core/api.service';


@Injectable()
export class PetTypesService {
  constructor(private apiService: ApiService) {
  }

  public getAllPetTypes(): Observable<PetTypeDTO[]> {
    let url = `/api/pettypes`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public getPetType(petTypeId: number): Observable<PetTypeDTO> {
    let url = `/api/pettypes/${petTypeId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public updatePetType(petTypeId: number, dto: PetTypeDTO): Observable<void> {
    let url = `/api/pettypes/${petTypeId}`;
    return this.apiService.put(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public deletePetType(petTypeId: number): Observable<void> {
    let url = `/api/pettypes/${petTypeId}`;
    return this.apiService.delete(url, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public addPetType(dto: PetTypeDTO): Observable<number> {
    let url = `/api/pettypes`;
    return this.apiService.post(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }
}
