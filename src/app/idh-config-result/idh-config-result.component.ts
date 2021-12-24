import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IdhConfig } from '../models/idhconfigresult';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';
import { MatDialog } from '@angular/material/dialog';
import { RecommendedActionsDialog } from '../recommended-actions-dialog/recommended-actions-dialog.component';

@Component({
  selector: 'app-idh-config-result',
  templateUrl: './idh-config-result.component.html',
  styleUrls: ['./idh-config-result.component.scss']
})
export class IdhConfigResult {
  searchTerm: any;
  pageEvent: any;
  pageSize = 10;
  discrepancyLocationList: any[] = [];
  displayedColumns: string[] = ['sourceSystem', 'targetSystem', 'store', 'Item', 'sourceCount', 'targetCount', 'action'];
  @Input() discrepancylocDetail: any;
  @ViewChild(MatPaginator) paginator: any;
  dataSource: MatTableDataSource<IdhConfig> = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort: any;

  constructor(private reconciliation: HttpClientIdhConfigService, public dialog: MatDialog) {

  }

  //table  will display based on location selection
  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.discrepancylocDetail) {
      this.reconciliation.getIdhConfigResult(changes.discrepancylocDetail.currentValue.locId).subscribe((data: any) => {
        data = data.filter((el: any) => {
          return el.locid == this.discrepancylocDetail.locId;
        })
        console.log(data);
        this.discrepancyLocationList = data;

        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  ngOnInit() {

  }

  showPopUp(row: any) {
    //row;
    this.dialog.open(RecommendedActionsDialog, { panelClass: 'my-dialog', });
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }

}
