import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';import { VetDTO } from './../models/application/dtos/vet.dto';
import { VetCreateDTO } from './../models/application/dtos/vet-create.dto';
import { VetUpdateDTO } from './../models/application/dtos/vet-update.dto';
import { ApiService } from './../core/api.service';


@Injectable()
export class VetsService {
  constructor(private apiService: ApiService) {
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

  public addVet(dto: VetCreateDTO): Observable<void> {
    let url = `/api/vets`;
    return this.apiService.post(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public updateVet(vetId: number, dto: VetUpdateDTO): Observable<void> {
    let url = `/api/vets/${vetId}`;
    return this.apiService.put(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public deleteVet(vetId: number): Observable<void> {
    let url = `/api/vets/${vetId}`;
    return this.apiService.delete(url, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }
}
