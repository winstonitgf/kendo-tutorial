import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartComponent } from "./chart.component";
import { PreRequestHtmlComponent } from './pre-request-html/pre-request-html.component';
import { PreRequestDataComponent } from './pre-request-data/pre-request-data.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { ChartInitComponent } from './javascript/chart-init/chart-init.component';
import { ChartTitleComponent } from './javascript/chart-title/chart-title.component';
import { ChartLegendComponent } from './javascript/chart-legend/chart-legend.component';
import { ChartSeriesdefaultsComponent } from './javascript/chart-seriesdefaults/chart-seriesdefaults.component';
import { ChartSeriesComponent } from './javascript/chart-series/chart-series.component';
import { ChartValueaxisComponent } from './javascript/chart-valueaxis/chart-valueaxis.component';
import { ChartCategoryaxisComponent } from './javascript/chart-categoryaxis/chart-categoryaxis.component';
import { ChartTooltipComponent } from './javascript/chart-tooltip/chart-tooltip.component';

@NgModule({
  declarations: [ChartComponent, PreRequestHtmlComponent, PreRequestDataComponent, ChartInitComponent, ChartTitleComponent, ChartLegendComponent, ChartSeriesdefaultsComponent, ChartSeriesComponent, ChartValueaxisComponent, ChartCategoryaxisComponent, ChartTooltipComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ChartComponent]
})
export class ChartModule {}
