import { Component } from '@angular/core';
import { HttpClientIdhConfigService } from '../services/http-client-idh-config.service';
@Component({
  selector: 'app-home-reconciliation',
  templateUrl: './home-idh.component.html',
  styleUrls: ['./home-idh.component.scss']
})
export class HomeIdhComponent {
  areadata: any;
  
  selectedWeek: any;
  discrepancylocDetail = '';
   
  getWeekData(week: any) {
    this.selectedWeek = week;
  }

  getDiscrepancyLocDetail(discrepancylocDetail: any) {
    this.discrepancylocDetail = discrepancylocDetail;
  }
}
