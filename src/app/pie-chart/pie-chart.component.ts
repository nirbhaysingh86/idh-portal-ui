import { Component, Input, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  @Input() departmentdata: any;
  @Input() selectedWeek: any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartLabels: Label[] = [];
  public pieChartData: any = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
 

  constructor() {
     
  }

  ngOnInit() {

    this.pieChartLabels = this.departmentdata.map((dep: { departmentName: any; }) => (dep.departmentName));
    this.pieChartData = this.departmentdata.map((dep: { discrepancy: any; }) => (dep.discrepancy));
  }
   //pie chart will display based on week selection
  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes && changes.selectedWeek) {

      if (this.pieChartData.length > 0) {
        for (let i = 0; i < this.pieChartData.length; i++) {
          this.pieChartData[i] = this.departmentdata[i][this.selectedWeek];
        }
        this.chart?.update();
      }
       
    }
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        filter: (legendItem:any, data:any) => {
          // First, retrieve the data corresponding to that label
          const label = legendItem.text
          const qtd = data.datasets[0].data[legendItem.index]
          //// Second, mutate the legendItem to include the new text
          legendItem.text = `${legendItem.text} : ${qtd}`
          // Third, the filter method expects a bool, so return true to show the modified legendItem in the legend
          return true
        }
      }
    },

    tooltips: {
      enabled: true,
       
      callbacks: {
        //label: function (tooltipItems, data) {
        //  return data.datasets[0].data[tooltipItems.index] + ' %';
        //}
      }
    },
     
  };
  // Define colors of chart segments
  pieChartColors: Color[] = [
    {
      backgroundColor: ['#5B9BD5', '#ED7D31', '#A5A5A5', '#FFC000','#4472C4'],
    }
  ];
}
