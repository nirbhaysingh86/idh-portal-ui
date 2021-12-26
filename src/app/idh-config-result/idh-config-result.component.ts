import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IdhConfig } from '../models/idhconfigresult';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';
import { MatDialog } from '@angular/material/dialog';
import { IdhFilterDialogComponenet } from '../idh-filter-option-dialog/idh-filter-option-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { PromoteDialogComponenet } from '../promote-dialog/promote-dialog.component';

@Component({
  selector: 'app-idh-config-result',
  templateUrl: './idh-config-result.component.html',
  styleUrls: ['./idh-config-result.component.scss']
})
export class IdhConfigResult {
  searchTerm: any;
  pageEvent: any;
  pageSize = 25;
  idhConfigResults: any[] = [];
  displayedColumns: string[] = ['select', 'subjectAreaName', 'subjectSubAreaName', 'sourceSystemCode', 'objectName', 'resourceName', 'user', 'lastUpdatedDate', 'viewdetails'];
  @ViewChild(MatPaginator) paginator: any;
  dataSource: MatTableDataSource<IdhConfig> = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort: any;
  selection = new SelectionModel<IdhConfig>(true, []);
  promoteButtonEnable = false;
  envType: any;

  constructor(private idhConfigService: HttpClientIdhConfigService, public dialog: MatDialog, private router: Router) {
    if (this.router && this.router.getCurrentNavigation()) {
      this.envType = this.router.getCurrentNavigation()?.extras.state;
    }
  }

  ngOnInit() {
    this.getIdhConfigResult();
    
  }

  //table  will display based on location selection
  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.discrepancylocDetail) {

    }
  }
  checkBoxClicked($event: any) {
    if (this.selection.selected.length > 1 && !$event.checked) {
      this.promoteButtonEnable = true;
    } else {
      this.promoteButtonEnable = $event.checked;
    }

  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IdhConfig): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${1 + 1}`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  getIdhConfigResult() {
    this.idhConfigService.getIdhConfigResult("").subscribe((data: any) => {
      //data = data.filter((el: any) => {
      //  return el.locid == this.discrepancylocDetail.locId;
      //})
      console.log(data);
      this.idhConfigResults = data;

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  showPopUp() {

    this.dialog.open(IdhFilterDialogComponenet, { panelClass: 'my-dialog', });
  }

  showPromotePopUp() {
    
    const modalRef = this.dialog.open(PromoteDialogComponenet, { panelClass: 'my-dialog', });
    modalRef.componentInstance.promote = this.envType;
  }

  navigateToViewDetail(row: any) {
    this.router.navigate(['/configdetail']);
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }

  getTooltip(column: any, row: any) {
    //return column + ' - ' + row[column];
    return row[column];
  }

}
