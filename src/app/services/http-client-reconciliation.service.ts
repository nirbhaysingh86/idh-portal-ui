import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ReconciliationService } from './reconciliation.service';
import { Department } from '../models/department';
import { Location } from '../models/location';
import { Items } from '../models/items';
import { DiscrepancyLocationDetails } from '../models/discrepancylocationdetails';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})

export class HttpClientReconciliationService extends ReconciliationService {
  
  constructor(private http: HttpClient) {
    super();
  }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl).pipe(
      catchError(this.handleError)
    );
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentUrl).pipe(
      catchError(this.handleError)
    );
  }

  getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.itemtUrl).pipe(
      catchError(this.handleError)
    );
  }

  getDiscrepancyLocationDetails(locid :any): Observable<DiscrepancyLocationDetails[]> {
    
    // add safe, encoded search parameter if term is present
    const options =
      { params: new HttpParams().set('locid', locid) } ;

    return this.http.get<DiscrepancyLocationDetails[]>(this.discrepancyLocationtUrl, options).pipe(
      catchError(this.handleError)
    );
     
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
   
}
