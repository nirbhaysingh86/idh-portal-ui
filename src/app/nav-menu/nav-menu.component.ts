import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private idhConfigService: HttpClientIdhConfigService, private router: Router) {

  }

  ngOnInit() {
    this.getIdhConfigResult();
    this.selectedrouterText = 'Search';
    this.envType = 'DEV';
    this.router.navigate(['configsearch'], { state: { selectedEnvType: this.envType } });
  }

  getIdhConfigResult() {
    this.idhConfigService.getBreadcrumbMenu().subscribe((data: any) => {
      console.log(data);
      this.breadcrumbMenuList = data;
       
    })
  }

  getSelectedMenu(routerText:any,routeLink:any) {
    this.selectedrouterText = routerText;
    this.router.navigate([routeLink], { state: { selectedEnvType: this.envType } });
  }

  menuClick(envType:any) {
    this.envType = envType;
  }
}
