import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Department } from '../models/department';
import { Observable } from 'rxjs';
import { DiscrepancyLocationDetails } from '../models/discrepancylocationdetails';
import { Items } from '../models/items';
import { Area } from '../models/area';
@Injectable({
  providedIn: 'root'
})

export abstract class IdhConfigService {
  areaUrl = 'assets/area.json';
  departmentUrl = 'assets/departments.json';
  itemtUrl = 'assets/items.json';//'api/items';
  discrepancyLocationtUrl = 'assets/discrepancyLocationDetails.json';
  abstract getArea(): Observable<Area[]>;
  abstract getDepartments(): Observable<Department[]>;
  abstract getItems(): Observable<Items[]>;
  abstract getDiscrepancyLocationDetails(locId: any): Observable<DiscrepancyLocationDetails[]>;
}
