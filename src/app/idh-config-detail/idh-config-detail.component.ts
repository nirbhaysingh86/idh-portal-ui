import { Component, EventEmitter, Inject, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PromoteDialogComponenet } from '../promote-dialog/promote-dialog.component';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';

@Component({
  selector: 'app-idh-detail',
  templateUrl: './idh-config-detail.component.html',
  styleUrls: ['./idh-config-detail.component.scss']
})

export class IdhConfigDetailComponent implements OnInit {

  
  setBreadcrumbMenuatext: any;
  selected: string | undefined;
  envType = localStorage.getItem("envType");
  idhEnvironmentsList = [
    { sequence: 'Lorem ipsum', sourceEnv: 'Lorem ipsum', targetEnv: 'Lorem ipsum' },
    { sequence: 'Lorem ipsum', sourceEnv: 'Lorem ipsum', targetEnv: 'Lorem ipsum' }
  ];
   
  areadata: any;
  idhConfig = { "idhConfig": "", "errorHandling": "No", "configurationOption": { "ingestTaxonomy": "No", "copyToSource": "", "dataLoadType": "Delta", "retainedVersion": "s3v2", "escalationLevel": "Priority 1" }, "configBasicSetting": { "area": "", "subarea": "", "systemCode": "ipsum", "objectCode": "ObjectCode 2", "resource": "Resource 2", "ingestionSource": "Table", "objectName": "", "contentType": "Json", "effectiveDate": "2021-12-28T03:00:35.851Z", "exipirationDate": "2022-01-27T03:00:35.851Z", "configurationStatus": "Active" }, "projectDetail": [{ "keyword": "ProjectCode", "value": "Ta2" }, { "keyword": "ProjectCode", "value": "Ta3" }], "copyToLowerEnv": [{ "sequence": "Ipsum", "sourceEnv": "PREPROD", "targetEnv": "UAT" }], "activeBatch": [{ "planName": "Ipsum", "status": "Yes" }, { "planName": "Lorem", "status": "No" }], "vendTopic": [{ "name": "Ipsum", "endpoints": "Yes", "status": "Yes", "directlyVendPayload": "No" }, { "name": "Ipsum", "endpoints": "No", "status": "No", "directlyVendPayload": "No" }] };
  constructor(private idhConfigService: HttpClientIdhConfigService, private router: Router, private dialog: MatDialog) {
    this.setBreadcrumbMenuatext = 'Detail';
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

  configEdit() {
    this.router.navigate(['configedit']);
  }

  /** Open the promote dialog. */
  showPromotePopUp() {

    const modalRef = this.dialog.open(PromoteDialogComponenet, { panelClass: 'my-dialog', });
    modalRef.componentInstance.promote = this.envType;
  }
}
