
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ItemData } from '../../models/multi-select-item-data';
import { HttpClientIdhConfigService } from '../../services/http-client-idh-config.service';
 
 
@Component({
  selector: 'breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html',
  styleUrls: ['./breadcrumb-menu.component.scss']
})
export class BreadcrumbMmenuComponent implements OnInit {
  @Input() getCurrentBreadcrumbMenu: any;
  breadcrumbMenuList: any;
  selectedrouterText: any;
  lastname: any;
  envType: any;
  constructor(private idhConfigService: HttpClientIdhConfigService, private router: Router) {

  }

  ngOnInit() {
    this.getBreadcrumbMenu();
    this.selectedrouterText = this.getCurrentBreadcrumbMenu || 'Search';
    this.envType = 'DEV';
    
  }
    
  getBreadcrumbMenu() {
    this.idhConfigService.getBreadcrumbMenu().subscribe((data: any) => {
      console.log(data);
      let index=0;
      data.some((el: any,i:any) => {
        if (el.routerText == this.getCurrentBreadcrumbMenu) { return index=i};
      });
      data[index].isDisplay = true;
      this.breadcrumbMenuList = data;

    })
  }
   
  getSelectedMenu(routerText: any, routeLink: any) {
    this.selectedrouterText = routerText;
    this.router.navigate([routeLink], { state: { selectedEnvType: this.envType } });
  }

  menuClick(envType: any) {
    this.envType = envType;
  }

   
  ngOnChanges(changes: any) {
    console.log(changes);
     
  }
}