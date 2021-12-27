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
import { ItemData } from '../models/multi-select-item-data';

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
  dialogValue: any;
  filterCount: any;
  selectData: Array<any> = [];
  isload: any;
  isRefreshClick: any;

  constructor(private idhConfigService: HttpClientIdhConfigService, public dialog: MatDialog, private router: Router) {
    if (this.router && this.router.getCurrentNavigation()) {
      this.envType = this.router.getCurrentNavigation()?.extras.state;
    }
    this.isload = true;
  }

  ngOnInit() {
    this.getIdhConfigResult();
    this.filterCount = 0;
    
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

  showFilterPopUp() {
    const modalRef = this.dialog.open(IdhFilterDialogComponenet, { panelClass: 'my-dialog', });
    modalRef.componentInstance.dialogValue = this.dialogValue;
    modalRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result;
      this.countFilter();
      this.filterdataBasedOnSelection(false);
      
    });
  }

  filterdataBasedOnSelection(isrefresh: boolean) {
    this.isload = true;
    this.isRefreshClick = false;
    if (this.dialogValue && this.dialogValue.user) {
      for (let i = 0; i < this.dialogValue.user.length; i++) {
        const filterValue = this.dialogValue.user[i];
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
          break;
        }
      }
    }
    if (this.dialogValue && this.dialogValue.area) {
      const filterValue = this.dialogValue.area;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
        return;
      }
    }
    if (this.dialogValue && this.dialogValue.objectCode) {
      const filterValue = this.dialogValue.objectCode;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
        return;
      }
    }
    if (this.dialogValue && this.dialogValue.resourceName) {
      const filterValue = this.dialogValue.resourceName;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
        return;
      }
    }
    if (this.dialogValue && this.dialogValue.subArea) {
      const filterValue = this.dialogValue.subArea;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
        return;
      }
    }
    if (this.dialogValue && this.dialogValue.objectCode) {
      const filterValue = this.dialogValue.objectCode;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
        return;
      }
    }
    if (this.dialogValue && this.dialogValue.systemCode) {
      const filterValue = this.dialogValue.systemCode;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.filteredData && this.dataSource.filteredData.length > 0) {
        return;
      }
    }
    if (isrefresh && this.selectData && this.selectData.length == 0) {
      this.dataSource.filter = "";
      return;
       
    }
    if (this.dataSource.filteredData && this.dataSource.filteredData.length == 0) {
      this.isload = false;
     
    }
  }

  countFilter() {

    let count = 0;
    this.selectData = [];
    let data = {  };
    if (this.dialogValue && this.dialogValue.area) {
      count += 1;
      data = { "item": "<FILTER 1 Area>", "selected": true };
      this.selectData.push(data);
    }
    if (this.dialogValue && this.dialogValue.objectCode) {
      count += 1;
      data = { "item": "<FILTER 1 Object Code>", "selected": true };
      this.selectData.push(data);
    }
    if (this.dialogValue && this.dialogValue.resourceName) {
      count += 1;
      data = { "item": "<FILTER 1 Resource Name>", "selected": true };
      this.selectData.push(data);
    }
    if (this.dialogValue && this.dialogValue.subArea) {
      count += 1;
      data = { "item": "<FILTER 1 SubArea>", "selected": true };
      this.selectData.push(data);
    }
    if (this.dialogValue && this.dialogValue.systemCode) {
      count += 1;
      data = { "item": "<FILTER 1 System Code>", "selected": true };
      this.selectData.push(data);
    }
    if (this.dialogValue && this.dialogValue.user) {
      count += 1;
      data = { "item": "<FILTER 1 User>", "selected": true };
      this.selectData.push(data);
    }
    this.filterCount = count;

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

  removeChip = (data: ItemData): void => {
    this.toggleSelection(data);
    this.isRefreshClick = true;
  };

  refreshResult() {
    
    this.filterdataBasedOnSelection(true);
    
  }

  toggleSelection = (data: ItemData): void => {
    data.selected = !data.selected;
    if (data.selected === true) {
      this.selectData.push(data);
    } else {
      const i = this.selectData.findIndex(value => value.item === data.item);
      this.selectData.splice(i, 1);
    }
  };
}
