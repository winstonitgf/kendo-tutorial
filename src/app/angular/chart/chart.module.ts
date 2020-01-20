import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularChartComponent } from './chart.component';

@NgModule({
  declarations: [AngularChartComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AngularChartComponent
  ]
})
export class ChartModule { }
