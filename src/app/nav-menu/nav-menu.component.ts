import { Component } from '@angular/core';
 

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
   
  envType: any;
  constructor() {

  }

  ngOnInit() {
    
  }

  menuClick(envType:any) {
    this.envType = envType;
  }
}
