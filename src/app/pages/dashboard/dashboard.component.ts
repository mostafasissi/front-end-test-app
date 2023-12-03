import { Component } from '@angular/core';
import { stackedBarChartOptions } from 'src/app/data/store/stacked-bar-chart-options';
import { pieChartOptions } from 'src/app/data/store/pie-chart-options';
import { candidateChartOptions } from 'src/app/data/store/candidate-chart-option';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stackedChartOptions : any = stackedBarChartOptions ; 

  PiechartOptions : any = pieChartOptions ;

  candidateChartOptions : any = candidateChartOptions ; 
}
