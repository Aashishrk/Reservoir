import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  dataSource: any;
  dataSource2: any;
  dataSource3: any;
  width: string;
  height: string;
  type: string;
  dataFormat: string;
  
  constructor() {
    this.dataSource = "json";
    this.width = "500";
    this.height = "500";
    this.type = "Column2D";
    
    this.dataSource = {
      chart: {
        caption: "Water Capacity of the 10 Largest Reservoirs in the USA",
        numberPrefix: "cu.km ",
        theme: "ocean"
      },
      data: [{
        label: "Toledo Bend Reservoir",
        value: "5.517"
      },
      {
        label: "New Melones Lake",
        value: "2.985"
      },
      {
        label: "Greers Ferry Lake",
        value: "3.508"
      },
      {
        label: "Falcon Lake",
        value: "3.263"
      },
      {
        label: "Douglas Lake",
        value: "1.802"
      }]
    };
      this.dataSource2 = {
        chart: {
          caption: "Water Distribution from various regions",
          subCaption: "Last year",
          numberPrefix: "$",
          paletteColors: "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
          bgColor: "#ffffff",
          showBorder: "0",
          use3DLighting: "0",
          showShadow: "0",
          enableSmartLabels: "0",
          startingAngle: "310",
          showLabels: "0",
          showPercentValues: "1",
          showLegend: "1",
          legendShadow: '0',
          legendBorderAlpha: "0",
          centerLabel: "Water Content : $label",
          centerLabelBold: "1",
          showTooltip: "0",
          decimals: "0",
          captionFontSize: "14",
          subcaptionFontSize: "14",
          subcaptionFontBold: "0"
        },
        data: [
          {
            label: "North",
            value: "1440"
          },
          {
            label: "South",
            value: "612"
          },
          {
            label: "East",
            value: "448"
          },
          {
            label: "West",
            value: "778"
          },
          {
            label: "South-east",
            value: "389"
          }
        ]
      };
    this.dataSource3 = {
      "chart": {
        "caption": "pH Value",
        "subcaption": "Last year",
        "xaxisname": "Month",
        "yaxisname": "pH ",
        "theme": "ocean",
      },
      "categories": [
        {
          "category": [
            {
              "label": "Jan"
            },
            {
              "label": "Feb"
            },
            {
              "label": "Mar"
            },
            {
              "label": "Apr"
            },
            {
              "label": "May"
            },
            {
              "label": "Jun"
            },
            {
              "label": "Jul"
            },
            {
              "label": "Aug"
            },
            {
              "label": "Sep"
            },
            {
              "label": "Oct"
            },
            {
              "label": "Nov"
            },
            {
              "label": "Dec"
            }
          ]
        }
      ],
      "dataset": [
        {
          "renderas": "line",
          "showvalues": "0",
          "data": [
            {
              "value": "6.5"
            },
            {
              "value": "6.2"
            },
            {
              "value": "6.8"
            },
            {
              "value": "7"
            },
            {
              "value": "7"
            },
            {
              "value": "7.4"
            },
            {
              "value": "7.2"
            },
            {
              "value": "7"
            },
            {
              "value": "6.8"
            },
            {
              "value": "7.4"
            },
            {
              "value": "7.2"
            },
            {
              "value": "7.2"
            }
          ]
        },
      ]
    };
  }
  
  updateMyChartData() {
    let label = ["Lewisville Lake", "Abiquiu Lake", "Mark Twain", "Banks Lake", "San Luis Reservoir", "Jordan Lake", "Painted Rock Reservoir", "Kaw Lake","Canyon Ferry Lake", "Ross Lake"];
    let value = [2.569, 1.471, 2.594, 1.573, 2.518, 2.031, 3.073, 1.320 , 2.464, 1.770 ];
    for(var i = 0; i <= 25; i++)
    {
      this.dataSource.data[i].label = label[i];
      this.dataSource.data[i].value = value[i];

    }
  }
  ngOnInit() {
    document.body.classList.add('bg-img1');
  }

}
