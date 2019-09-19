import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../../_material/angular-material.module";
import { FakeDataComponent } from "./javascript/fake-data/fake-data.component";
import { PreRequestDataComponent } from "./pre-request-data/pre-request-data.component";
import { GridComponent } from "./grid.component";
import { PreRequestHtmlComponent } from "./pre-request-html/pre-request-html.component";
import { GridInitComponent } from './javascript/grid-init/grid-init.component';
import { GridDatasourceComponent } from './javascript/grid-datasource/grid-datasource.component';
import { GridColumnsComponent } from './javascript/grid-columns/grid-columns.component';
import { GridConfigComponent } from './javascript/grid-config/grid-config.component';
import { GridPdfComponent } from './javascript/grid-pdf/grid-pdf.component';
import { GridExcelComponent } from './javascript/grid-excel/grid-excel.component';

@NgModule({
  declarations: [
    GridComponent,
    FakeDataComponent,
    PreRequestDataComponent,
    PreRequestHtmlComponent,
    GridInitComponent,
    GridDatasourceComponent,
    GridColumnsComponent,
    GridConfigComponent,
    GridPdfComponent,
    GridExcelComponent
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [
    GridComponent,
    FakeDataComponent,
    PreRequestDataComponent,
    PreRequestHtmlComponent,
    GridInitComponent,
    GridDatasourceComponent,
    GridColumnsComponent,
    GridConfigComponent,
    GridPdfComponent,
    GridExcelComponent
  ]
})
export class GridModule {}
