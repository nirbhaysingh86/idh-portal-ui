import { Component } from '@angular/core';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  breadcrumbMenuList: any;
  selectedrouterText: any;
  envType: any;
  constructor(private idhConfigService: HttpClientIdhConfigService) {

  }

  ngOnInit() {
    this.getIdhConfigResult();
    this.selectedrouterText = 'Search';
    this.envType = 'DEV';
  }

  getIdhConfigResult() {
    this.idhConfigService.getBreadcrumbMenu().subscribe((data: any) => {
      console.log(data);
      this.breadcrumbMenuList = data;
       
    })
  }

  getSelectedMenu(routerText:any) {
    this.selectedrouterText = routerText;
  }

  menuClick(envType:any) {
    this.envType = envType;
  }
}
