import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromoteDialogSuccessComponenet } from '../promote-dialog-success/promote-dialog-success.component';

@Component({
  selector: 'promote-dialog',
  templateUrl: './promote-dialog.component.html',
  styleUrls: ['./promote-dialog.component.scss']
})
export class PromoteDialogComponenet {
  @Input() public promote: any;
  slectedEnv: any;

  constructor(private dialog: MatDialog) {

  }
  /** Open the promote dialog. */
  goTopromote() {
    const modalRef = this.dialog.open(PromoteDialogSuccessComponenet, { panelClass: 'my-dialog', });
    modalRef.componentInstance.promotesuccess = this.slectedEnv;
  }
  ngOnInit() {
    this.slectedEnv = localStorage.getItem("envType");

  }
}
