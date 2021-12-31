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
    this.envType = localStorage.getItem("envType");
  }

  menuClick(envType: any) {
    localStorage.setItem("envType", envType);
    this.envType = localStorage.getItem("envType");
  }
}
