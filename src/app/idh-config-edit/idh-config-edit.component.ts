import { Component, EventEmitter, Inject, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';

@Component({
  selector: 'app-idh-edit',
  templateUrl: './idh-config-edit.component.html',
  styleUrls: ['./idh-config-edit.component.scss']
})

export class IdhConfigEditComponent implements OnInit {


  selected: string | undefined;

  idhProjectList = [
    { value: 'Lorem ipsum', keyword: 'Lorem ipsum' },
    { value: 'Lorem ipsum', keyword: 'Lorem ipsum' } 
  ];
  iddActiveBatchList = [
    { planName: 'Lorem ipsum', status: 'Lorem ipsum' },
    { planName: 'Lorem ipsum', status: 'Lorem ipsum' }
  ];
  idhEnvironmentsList = [
    { sequence: 'Lorem ipsum', sourceEnv: 'Lorem ipsum', targetEnv: 'Lorem ipsum' },
    { sequence: 'Lorem ipsum', sourceEnv: 'Lorem ipsum', targetEnv: 'Lorem ipsum' }
  ];
  idhVendList = [
    { name: 'Lorem ipsum',endpointAddress: 'Lorem ipsum', status: 'Lorem ipsum', directlyVendPayload: 'Lorem ipsum' },
    { name: 'Lorem ipsum',endpointAddress: 'Lorem ipsum', status: 'Lorem ipsum', directlyVendPayload: 'Lorem ipsum' }
  ];
 areadata: any;

  constructor(private idhConfigService: HttpClientIdhConfigService) {

  }

  ngOnInit() {
    this.getArea();

  }

  getArea() {
    this.idhConfigService.getArea().subscribe((data: any) => {
      console.log(data);
      this.areadata = data;
    })
  }

}
