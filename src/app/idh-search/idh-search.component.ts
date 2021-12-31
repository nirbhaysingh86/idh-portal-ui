import { Component, EventEmitter, Inject, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';

@Component({
  selector: 'app-idh-search',
  templateUrl: './idh-search.component.html',
  styleUrls: ['./idh-search.component.scss']
})

export class IdhSearchComponent implements OnInit {

  selectedArea: any;
  selectedSubArea: any;
  selectedSystemCode: any;
  selectedResourceName: any;
  selectedObjectCode: any;
  selected: string | undefined;
  setBreadcrumbMenuatext: any;

  idhserach = [
    { value: 'Lorem', text: 'Lorem' },
    { value: 'Ipsum', text: 'Ipsum' }
  ];
  areadata: any;

  constructor(private idhConfigService: HttpClientIdhConfigService, private router: Router) {

  }

  ngOnInit() {
    this.getArea();

  }

  getArea() {
    this.idhConfigService.getArea().subscribe((data: any) => {
      console.log(data);
      this.areadata = data;
      this.setBreadcrumbMenuatext = 'Search';
    })
  }
  /** Search config based on search category */
  searchConfig() {
    this.setBreadcrumbMenuatext = 'Search';
    this.router.navigate(['configresult'], { state: { selectedEnvType: 'Dev', objectCode: this.selectedObjectCode, resourceName: this.selectedResourceName, systemCode: this.selectedSystemCode, subArea: this.selectedSubArea, area: this.selectedArea } });
  }

  clearConfig() {
    this.selectedArea="";
    this.selectedSubArea = "";
    this.selectedSystemCode = "";
    this.selectedResourceName = "";
    this.selectedObjectCode = "";
  }

}
