import { Component } from '@angular/core';

@Component({
  selector: 'idh-filter-option-dialog',
  templateUrl: './idh-filter-option-dialog.component.html',
  styleUrls: ['./idh-filter-option-dialog.component.scss']
})
export class IdhFilterDialogComponenet {
  currencies = [
    { value: 'us', text: 'U.S. Dollar $' },
    { value: 'euro', text: 'Euro €' },
    { value: 'yen', text: 'Japanese Yen ¥' },
    { value: 'pound', text: 'Pounds £' },
    { value: 'inr', text: 'Indian Rupee ₹' }
  ];
  onGoToHelpDesk() {

  }
}
