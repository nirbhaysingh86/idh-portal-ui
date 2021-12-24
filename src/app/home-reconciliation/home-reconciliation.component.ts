import { Component } from '@angular/core';
import { HttpClientReconciliationService } from '../services/http-client-reconciliation.service';
@Component({
  selector: 'app-home-reconciliation',
  templateUrl: './home-reconciliation.component.html',
  styleUrls: ['./home-reconciliation.component.scss']
})
export class HomeReconciliationfComponent {
  locationdata: any;
  departmentdata: any;
  locationlabels: any;
  loccolors: any;
  departmentlabels: any;
  itemdata: any;
  locdiscrepancy: any;
  depdiscrepancy: any;
  depcolors: any;
  selectedWeek: any;
  discrepancylocDetail = '';

  selected: string | undefined;

  currencies = [
    { value: 'us', text: 'U.S. Dollar $' },
    { value: 'euro', text: 'Euro €' },
    { value: 'yen', text: 'Japanese Yen ¥' },
    { value: 'pound', text: 'Pounds £' },
    { value: 'inr', text: 'Indian Rupee ₹' }
  ];
  constructor(private reconciliation: HttpClientReconciliationService) {

  }

  ngOnInit() {
    this.getLocation();
    this.gettDepartment();
    this.gettItem();
  }

  getLocation() {
    this.reconciliation.getLocations().subscribe((data: any) => {
      console.log(data);
      let locType = data.map((loc: { locationType: any; }) => (loc.locationType));
      this.locationlabels = locType.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
      var result: any[] = [];
      data.reduce(function (res: any, value: any) {
        if (!res[value.locationType]) {
          res[value.locationType] = { locationType: value.locationType, discrepancy: 0 };
          result.push(res[value.locationType])
        }
        res[value.locationType].discrepancy += value.discrepancy;
        return res;
      }, {});
      this.locdiscrepancy = result.map((loc: { discrepancy: any; }) => (loc.discrepancy));

      this.loccolors = [{ backgroundColor: ['#E5E9EF', '#A9D18E']}];
      this.locationdata = data;
    })
  }

  gettDepartment() {
    this.reconciliation.getDepartments().subscribe((data: any) => {
      console.log(data);
      this.departmentdata = data;
      let depType = data.map((dep: { departmentType: any; }) => (dep.departmentType));
      this.departmentlabels = depType.filter((item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i);
      var result: any[] = [];
      data.reduce(function (res: any, value: any) {
        if (!res[value.departmentType]) {
          res[value.departmentType] = { departmentType: value.departmentType, discrepancy: 0 };
          result.push(res[value.departmentType])
        }
        res[value.departmentType].discrepancy += value.discrepancy;
        return res;
      }, {});
      this.depdiscrepancy = result.map((loc: { discrepancy: any; }) => (loc.discrepancy));

      this.depcolors = [{ backgroundColor: ['#E5E9EF', '#FFC000'] }];
    })
  }

  gettItem() {
    this.reconciliation.getItems().subscribe((data: any) => {
      console.log(data);
      this.itemdata = data;
    })
  }

  getWeekData(week: any) {
    this.selectedWeek = week;
  }

  getDiscrepancyLocDetail(discrepancylocDetail: any) {
    this.discrepancylocDetail = discrepancylocDetail;
  }
}
