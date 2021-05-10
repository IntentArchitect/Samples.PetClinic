import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VetDTO } from './models/vet.dto';
import { VetCreateDTO } from './models/vet-create.dto';
import { VetUpdateDTO } from './models/vet-update.dto';
import { ApiService } from './../core/api.service';

@Injectable()
export class VetsService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public getAllVets(): Observable<VetDTO[]> {
    let url = `/api/vets`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public getVet(vetId: number): Observable<VetDTO> {
    let url = `/api/vets/${vetId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addVet(dto: VetCreateDTO): Observable<boolean> {
    let url = `/api/vets`;
    return this.apiService.post(url, dto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public updateVet(vetId: number, dto: VetUpdateDTO): Observable<boolean> {
    let url = `/api/vets/${vetId}`;
    return this.apiService.put(url, dto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public deleteVet(vetId: number): Observable<boolean> {
    let url = `/api/vets/${vetId}`;
    return this.apiService.delete(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
