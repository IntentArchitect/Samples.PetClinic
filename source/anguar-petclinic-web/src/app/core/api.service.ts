import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error || error);
  }

  get(path: string, params?: HttpParams, headers?: HttpHeaders, responseType:any = 'json'): Observable<any> {
    return this.http.get(`${environment.api_base_url}${path}`, { params, headers, responseType })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}, params?: HttpParams, headers?: HttpHeaders, responseType:any = 'json'): Observable<any> {
    headers = (headers ?? new HttpHeaders()).append('Content-Type', 'application/json');

    return this.http.put(
      `${environment.api_base_url}${path}`,
      JSON.stringify(body),
      {
        params, headers, responseType
      }
    ).pipe(catchError(this.formatErrors));
  }

  putWithFormData(path: string, formData: FormData, params?: HttpParams, headers?: HttpHeaders, responseType:any = 'json'): Observable<any> {
    return this.http.put(
      `${environment.api_base_url}${path}`,
      formData,
      { params, headers, responseType }
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, params?: HttpParams, headers?: HttpHeaders, responseType:any = 'json'): Observable<any> {
    headers = (headers ?? new HttpHeaders()).append('Content-Type', 'application/json');
    return this.http.post(
      `${environment.api_base_url}${path}`,
      JSON.stringify(body),
      { params, headers, responseType }
    ).pipe(catchError(this.formatErrors));
  }

  postWithFormData(path: string, formData: FormData, params?: HttpParams, headers?: HttpHeaders, responseType:any = 'json'): Observable<any> {
    return this.http.post(
      `${environment.api_base_url}${path}`,
      formData,
      { params, headers, responseType }
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string, params?: HttpParams, headers?: HttpHeaders, responseType:any = 'json'): Observable<any> {
    return this.http.delete(
      `${environment.api_base_url}${path}`,
      { params, headers, responseType }
    ).pipe(catchError(this.formatErrors));
  }
}