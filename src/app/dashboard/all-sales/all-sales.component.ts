import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.css']
})
export class AllSalesComponent implements OnInit {


  ngOnInit() {

    // var canvas: any = document.getElementById("mycanvas");
    // var ctx = canvas.getContext("2d");

    // var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
    // purple_orange_gradient.addColorStop(0, 'orange');
    // purple_orange_gradient.addColorStop(1, 'purple');

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'dec'],
        datasets: [{
          label: 'Sales',
          data: [12, 10, 3, 5, 2, 3, 4, 6, 2, 10, 3, 5],
          borderColor: "#eb4f34",
          backgroundColor: "#eb4f34",
          borderWidth: 0.8,
          barThickness: 10
        },
        {
          label: 'Target',
          data: [10, 9, 2, 4, 1, 2, 2, 5, 8, 9, 10, 12],
          backgroundColor: "#0196FD",
          borderColor: "#0196fd",
          borderWidth: 0.8,
          barThickness: 10
        }
        ]

      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

}


// backgroundColor: purple_orange_gradient,
// 						hoverBackgroundColor: purple_orange_gradient,
// 						hoverBorderWidth: 2,
// 						hoverBorderColor: 'purple'