import { Component, Input } from '@angular/core';

@Component({
  selector: 'promote-dialog-success',
  templateUrl: './promote-dialog-success.component.html',
  styleUrls: ['./promote-dialog-success.component.scss']
})
export class PromoteDialogSuccessComponenet {
  @Input() public promotesuccess: any;
  slectedEnv: any;

  Ok() {

  }
  ngOnInit() {
    if (this.promotesuccess) {
      this.slectedEnv = this.promotesuccess;
    }

  }
}
