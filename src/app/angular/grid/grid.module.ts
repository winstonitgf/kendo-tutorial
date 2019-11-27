import { NgModule } from '@angular/core';
import { AngularGridComponent } from './grid.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { HtmlComponent } from './components/html/html.component';
import { TsComponent } from './components/ts/ts.component';
import { ModuleComponent } from './components/module/module.component';

@NgModule({
  declarations: [AngularGridComponent, HtmlComponent, TsComponent, ModuleComponent],
  imports: [AngularMaterialModule],
  exports: [AngularGridComponent]
})
export class GridModule { }
