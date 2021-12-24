import { Component, Input } from '@angular/core';
  
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  locations: any;
  @Input() locationdata: any;
  constructor() {
   
  }
  
  ngOnInit() {
    this.locations = this.locationdata;
  }
   
}
