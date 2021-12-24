import { Injectable } from '@angular/core';
import { SubArea } from '../models/subarea';
import { Observable } from 'rxjs';
import { IdhConfig } from '../models/idhconfigresult';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})

export abstract class IdhConfigService {
  areaUrl = 'assets/area.json';
  subAreaUrl = 'assets/subarea.json';
  idhConfigResultUrl = 'assets/idhConfigResult.json';
  abstract getArea(): Observable<Area[]>;
  abstract getSubArea(): Observable<SubArea[]>;
  abstract getIdhConfigResult(locId: any): Observable<IdhConfig[]>;
}
