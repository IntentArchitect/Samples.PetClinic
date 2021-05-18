import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PetDTO } from './models/pet.dto';
import { PetCreateDTO } from './models/pet-create.dto';
import { PetUpdateDTO } from './models/pet-update.dto';
import { ApiService } from './../core/api.service';

@Injectable()
export class PetsService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public getPet(petId: number): Observable<PetDTO> {
    let url = `/api/pets/${petId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addPet(dto: PetCreateDTO): Observable<boolean> {
    let url = `/api/pets`;
    return this.apiService.post(url, dto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public updatePet(petId: number, dto: PetUpdateDTO): Observable<boolean> {
    let url = `/api/pets/${petId}`;
    return this.apiService.put(url, dto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public deletePet(petId: number): Observable<boolean> {
    let url = `/api/pets/${petId}`;
    return this.apiService.delete(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
