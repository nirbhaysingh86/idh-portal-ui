import { Component, Input } from '@angular/core';

@Component({
  selector: 'promote-dialog',
  templateUrl: './promote-dialog.component.html',
  styleUrls: ['./promote-dialog.component.scss']
})
export class PromoteDialogComponenet {
  @Input() public promote: any;
  slectedEnv: any;

  goTopromote() {

  }
  ngOnInit() {
    if (this.promote && this.promote.selectedEnvType) {
      this.slectedEnv = this.promote.selectedEnvType;
    }

  }
}
