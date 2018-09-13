import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  options: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  };

  add() {
    // this.options.series.push({
    //   name: 'Nikx', data: [
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10),
    //     Math.floor(Math.random() * 10)]
    // );
    this.options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'New Title'
      }
    };
  }

}
