import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  public dataSource = {
      datasets: [{
          data: [],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              'green',
              'purple',
              'grey'
          ]
      }
  ],
  labels: []

  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) =>
    {
      // tslint:disable-next-line: no-debugger
      for (let i = 0; i < res.budget.myBudget.length; i++){
        this.dataSource.datasets[0].data[i] = res.budget.myBudget[i].budget;
        this.dataSource.labels[i] = res.budget.myBudget[i].title;
    }

    this.createChart();
    });
  }

  createChart(){
    let ctx = document.getElementById("myChart");

    let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: this.dataSource
  });
  }

}
