import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-e-charts',
  templateUrl: './e-charts.component.html',
  styleUrls: ['./e-charts.component.css']
})
export class EChartsComponent implements OnInit  {
  donutChart: Chart | undefined;
  donutStampChart: Chart | undefined;
  initDonut() {
    Highcharts.setOptions({
      colors: ['#e6e7eb','#612e86', '#b270ec', '#ead0fd',]
     });
    const donut = new Chart({
      chart: {
        // plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      credits: {
        enabled: false
    },
      title: {
        text: "<strong>30K</strong> <br><p>Initiated</p>",
        align: "center",
        verticalAlign: "middle",
        style:{
          fontSize:'12px',
        },
        y: 0
      },

      plotOptions: {
        pie: {
          allowPointSelect: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: "italic",
              color: "White"
            }
          },
          startAngle: -90,
          endAngle: -180,

          size: "90%",
          showInLegend: true
        }
      },
      legend: {
        symbolRadius: 0,
        align:'left'
    },
      series: [
        {
          data: [
            {
              name: "Initiated",
              y: 50
            },
            {
              name: "Pending",
              y: 25
            },
            {
              name: "Signed",
              y: 25
            },{
              name: "Expired",
              y: 5
            }

          ],
          type: "pie",
          innerSize: "70%"
        }
      ]
    });
    const donutStamp = new Chart({
      chart: {
        // plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      credits: {
        enabled: false
    },
      title: {
        text: "<strong>30K</strong> <br><p>Initiated</p>",
        align: "center",
        verticalAlign: "middle",
        style:{
          fontSize:'12px',
        },
        y: 0
      },

      plotOptions: {
        pie: {
          allowPointSelect: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: "italic",
              color: "White"
            }
          },
          startAngle: -90,
          endAngle: -180,

          size: "90%",
          showInLegend: true
        }
      },
      legend: {
        symbolRadius: 0,
        align:'left'
    },
      series: [
        {
          data: [
            {
              name: "Initiated",
              y: 50
            },
            {
              name: "Pending",
              y: 25
            },
            {
              name: "Signed",
              y: 25
            },{
              name: "Expired",
              y: 5
            }

          ],
          type: "pie",
          innerSize: "70%"
        }
      ]
    });
    this.donutStampChart = donutStamp
    this.donutChart = donut;
  }

  ngOnInit() {
    // this.initColumn();
    this.initDonut();
  }
}
