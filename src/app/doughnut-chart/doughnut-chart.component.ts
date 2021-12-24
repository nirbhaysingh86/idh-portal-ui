import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent implements OnInit {
  @Input() locationlabels: any;
  @Input() locdiscrepancy: any;
  @Input() departmentlabels: any;
  @Input() depdiscrepancy: any;
  @Input() header: any;
  @Input() depcolors: any;
  @Input() loccolors: any;

  // Define colors of chart segments
  doughnutChartColors: Color[] = [

  ];
  public doughnutChartLegend: boolean = false;
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [[]];
  doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: any = {
    //borderWidth: 2,
    //maintainAspectRatio: true,
    //cutoutPercentage: 100,
    centerText: true
  }

  ngOnInit() {
     
    this.doughnutChartLabels = this.locationlabels || this.departmentlabels;
    this.doughnutChartData = this.locdiscrepancy || this.depdiscrepancy;
    this.doughnutChartColors = this.loccolors || this.depcolors;
    if (this.header == "Ratio of affected deps") {
      Chart.plugins.register({
        beforeDraw: function (chart: any) {
          if (chart.canvas.id == "Ratio of affected deps") {
            var data = chart.data.datasets[0].data;
            var sum = data.reduce(function (a: any, b: any) {
              return a + b;
            }, 0);
            var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 10).toFixed(2);
            ctx.font =   "14px Arial";
            ctx.textBaseline = "middle";
            var text = sum,
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
            ctx.fillText("20%", textX+2, textY);
            ctx.save();
          }
        }
      });
    }
  }
  
 
}
