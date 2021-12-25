import { Component, EventEmitter, Inject, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';

@Component({
  selector: 'app-idh-search',
  templateUrl: './idh-search.component.html',
  styleUrls: ['./idh-search.component.scss']
})

export class IdhSearchComponent implements OnInit {


  selected: string | undefined;

  currencies = [
    { value: 'us', text: 'U.S. Dollar $' },
    { value: 'euro', text: 'Euro €' },
    { value: 'yen', text: 'Japanese Yen ¥' },
    { value: 'pound', text: 'Pounds £' },
    { value: 'inr', text: 'Indian Rupee ₹' }
  ];
    areadata: any;

  constructor(private idhConfigService: HttpClientIdhConfigService) {

  }

  ngOnInit() {
    this.getArea();

  }

  getArea() {
    this.idhConfigService.getArea().subscribe((data: any) => {
      console.log(data);
      this.areadata = data;
    })
  }

}
