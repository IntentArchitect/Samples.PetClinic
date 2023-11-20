import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';import { PetDTO } from './../models/application/dtos/pet.dto';
import { PetCreateDTO } from './../models/application/dtos/pet-create.dto';
import { PetUpdateDTO } from './../models/application/dtos/pet-update.dto';
import { ApiService } from './../core/api.service';


@Injectable()
export class PetsService {
  constructor(private apiService: ApiService) {
  }

  public getPet(petId: number): Observable<PetDTO> {
    let url = `/api/pets/${petId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addPet(dto: PetCreateDTO): Observable<void> {
    let url = `/api/pets`;
    return this.apiService.post(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public updatePet(petId: number, dto: PetUpdateDTO): Observable<void> {
    let url = `/api/pets/${petId}`;
    return this.apiService.put(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public deletePet(petId: number): Observable<void> {
    let url = `/api/pets/${petId}`;
    return this.apiService.delete(url, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }
}
