import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';import { SpecialtyDTO } from './../models/application/dtos/specialty.dto';
import { ApiService } from './../core/api.service';


@Injectable()
export class SpecialtiesService {
  constructor(private apiService: ApiService) {
  }

  public getAllSpecialties(): Observable<SpecialtyDTO[]> {
    let url = `/api/specialties`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public getSpecialty(specialtyId: number): Observable<SpecialtyDTO> {
    let url = `/api/specialties/${specialtyId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addSpecialty(dto: SpecialtyDTO): Observable<number> {
    let url = `/api/specialties`;
    return this.apiService.post(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public updateSpecialty(specialtyId: number, dto: SpecialtyDTO): Observable<void> {
    let url = `/api/specialties/${specialtyId}`;
    return this.apiService.put(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public deleteSpecialty(specialtyId: number): Observable<void> {
    let url = `/api/specialties/${specialtyId}`;
    return this.apiService.delete(url, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }
}
