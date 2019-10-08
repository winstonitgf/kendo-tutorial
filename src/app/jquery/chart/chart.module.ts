import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartComponent } from "./chart.component";
import { PreRequestHtmlComponent } from './pre-request-html/pre-request-html.component';
import { PreRequestDataComponent } from './pre-request-data/pre-request-data.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { ChartInitComponent } from './javascript/chart-init/chart-init.component';
import { ChartTitleComponent } from './javascript/chart-title/chart-title.component';
import { ChartLegendComponent } from './javascript/chart-legend/chart-legend.component';

@NgModule({
  declarations: [ChartComponent, PreRequestHtmlComponent, PreRequestDataComponent, ChartInitComponent, ChartTitleComponent, ChartLegendComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ChartComponent]
})
export class ChartModule {}
