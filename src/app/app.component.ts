import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private http: HttpClient) {
  }

  options: any = {
    chart: {
      type: 'area',
      spacingBottom:10,
      spacingTop:20
    },
    title: null,
    xAxis: {
      
    },
    yAxis: {
      gridLineDashStyle: 'longdash',
      title: null
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
          marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                  hover: {
                      enabled: true
                  }
              }
          }
      }
  },
    credits: false,
    series: [{
      name: 'John',
      data: [6, 11, 32, 110, 235,
        369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
        20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
        26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
        21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
        10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
        5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018]
    }]
  };

  stockOptions: any  = {
    rangeSelector: {
       selected: 1
    },
    credits: false,
    series: [{
       name: 'USD to EUR',
       data: [] // predefined JavaScript array
    }]
 };
  test: any = true;

  ngOnInit(){
    this.http.get('http://www.mocky.io/v2/5bef9a5b2f000064007a0bc4').subscribe(data => this.stockOptions = Object.assign({}, this.stockOptions, {series:[{
      name: 'Prices',
      data: data
    }]}));
  }
  add() {
    this.options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'New Title'
      }
    };
  }

}
