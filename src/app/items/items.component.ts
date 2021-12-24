import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items: any;
  @Input() itemdata: any;
  constructor() {

  }

  ngOnInit() {

    this.items = 0;
     this.itemdata.map( (val: any, index: any) => {
       this.items += val.discrepancy;
    })
     
  }
}
