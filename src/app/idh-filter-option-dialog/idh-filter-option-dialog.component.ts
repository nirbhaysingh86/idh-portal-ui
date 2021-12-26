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
