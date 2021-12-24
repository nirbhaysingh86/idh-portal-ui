import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IdhConfigService } from './idh-config.service';
import { SubArea } from '../models/subarea';
import { IdhConfig } from '../models/idhconfigresult';
import { Area } from '../models/area';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})

export class HttpClientIdhConfigService extends IdhConfigService {
  
  constructor(private http: HttpClient) {
    super();
  }

  getArea(): Observable<Area[]> {
    return this.http.get<Area[]>(this.areaUrl).pipe(
      catchError(this.handleError)
    );
  }

  getSubArea(): Observable<SubArea[]> {
    return this.http.get<SubArea[]>(this.subAreaUrl).pipe(
      catchError(this.handleError)
    );
  }
   
  getIdhConfigResult(locid :any): Observable<IdhConfig[]> {
    // add safe, encoded search parameter if term is present
    const options =
      { params: new HttpParams().set('locid', locid) } ;
    return this.http.get<IdhConfig[]>(this.idhConfigResultUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
   
}
