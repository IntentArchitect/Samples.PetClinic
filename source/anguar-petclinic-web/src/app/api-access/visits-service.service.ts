import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';import { VisitDTO } from './../models/application/dtos/visit.dto';
import { VisitCreateDTO } from './../models/application/dtos/visit-create.dto';
import { VisitUpdateDTO } from './../models/application/dtos/visit-update.dto';
import { ApiService } from './../core/api.service';


@Injectable()
export class VisitsService {
  constructor(private apiService: ApiService) {
  }

  public getVisit(visitId: number): Observable<VisitDTO> {
    let url = `/api/visits/${visitId}`;
    return this.apiService.get(url)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  public addVisit(dto: VisitCreateDTO): Observable<void> {
    let url = `/api/visits`;
    return this.apiService.post(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public updateVisit(visitId: number, dto: VisitUpdateDTO): Observable<void> {
    let url = `/api/visits/${visitId}`;
    return this.apiService.put(url, dto, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }

  public deleteVisit(visitId: number): Observable<void> {
    let url = `/api/visits/${visitId}`;
    return this.apiService.delete(url, undefined, undefined, 'text')
      .pipe(map((response: any) => {
        if (response && (response.startsWith("\"") || response.startsWith("'"))) { response = response.substring(1, response.length - 1); }
        return response;
      }));
  }
}
