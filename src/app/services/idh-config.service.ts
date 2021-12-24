import { Injectable } from '@angular/core';
import { SubArea } from '../models/subarea';
import { Observable } from 'rxjs';
import { IdhConfig } from '../models/idhconfigresult';
import { Area } from '../models/area';
import { BreadCrumbMenu } from '../models/BreadCrumbMenu';

@Injectable({
  providedIn: 'root'
})

export abstract class IdhConfigService {
  areaUrl = 'assets/area.json';
  subAreaUrl = 'assets/subarea.json';
  idhConfigResultUrl = 'assets/idhConfigResult.json';
  breadCrumbMenuUrl = 'assets/breadcrumbmenu.json';
  abstract getArea(): Observable<Area[]>;
  abstract getSubArea(): Observable<SubArea[]>;
  abstract getBreadcrumbMenu(): Observable<BreadCrumbMenu[]>;
  abstract getIdhConfigResult(locId: any): Observable<IdhConfig[]>;
}
