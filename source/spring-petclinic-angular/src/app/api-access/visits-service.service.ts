import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PetVisitDTO } from './models/pet-visit.dto';
import { VisitCreateDTO } from './models/visit-create.dto';
import { VisitUpdateDTO } from './models/visit-update.dto';
import { ApiService } from './../core/api.service';

@Injectable()
export class VisitsService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public getVisit(visitId: number): Observable<PetVisitDTO> {
    let url = `/api/visits/${visitId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addVisit(dto: VisitCreateDTO): Observable<boolean> {
    let url = `/api/visits`;
    return this.apiService.post(url, dto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public updateVisit(visitId: number, dto: VisitUpdateDTO): Observable<boolean> {
    let url = `/api/visits/${visitId}`;
    return this.apiService.put(url, dto)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public deleteVisit(visitId: number): Observable<boolean> {
    let url = `/api/visits/${visitId}`;
    return this.apiService.delete(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }
}
