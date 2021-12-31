import { Component, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'idh-filter-option-dialog',
  templateUrl: './idh-filter-option-dialog.component.html',
  styleUrls: ['./idh-filter-option-dialog.component.scss']
})
export class IdhFilterDialogComponenet {
  idhserach = [
    { value: 'Lorem', text: 'Lorem' },
    { value: 'Ipsum', text: 'Ipsum' }
  ];
  user = new FormControl();
  objectCode: any;
  resourceName: any;
  systemCode: any;
  subArea: any;
  area: any;
  lastUpdatedDate: any;
  @Input() public dialogValue: any;

  constructor(
    public dialogRef: MatDialogRef<IdhFilterDialogComponenet>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
     
  }
  ngOnInit() {
    if (this.dialogValue) {
      this.user.setValue( this.dialogValue.user);
      this.objectCode = this.dialogValue.objectCode;
      this.resourceName = this.dialogValue.resourceName;
      this.systemCode = this.dialogValue.systemCode;
      this.subArea = this.dialogValue.subArea;
      this.area = this.dialogValue.area;
      this.lastUpdatedDate = this.dialogValue.lastUpdatedDate;
    }

  }
  applyFilter() {
    this.area;
    this.dialogRef.close({ event: 'close', objectCode: this.objectCode, resourceName: this.resourceName, systemCode: this.systemCode, subArea: this.subArea, area: this.area, user: this.user?.value, lastUpdatedDate: this.lastUpdatedDate });
  }
  cancelFilter() {
    this.dialogRef.close({ event: 'cancel', objectCode: '', resourceName: '', systemCode: '', subArea: '', area: '', user: '', lastUpdatedDate: '' });
  }
  cardValue: any = {
    options: []
  };

  selectOptions: Array<string> = [
    'IAH122', 'IAH123', 'IAH124', 'IAH125', 'IAH126', 'IAH127', 'IAH128', 'IAH129', 'IAH131', 'IAH132'
  ];

  selectChange = (event: any) => {
    const key: string = event.key;
    this.cardValue[key] = [...event.data];

    console.log(this.cardValue);
  };

   
}
