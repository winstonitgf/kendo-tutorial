import { NgModule } from '@angular/core';
import { AngularGridComponent } from './grid.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';

@NgModule({
  declarations: [AngularGridComponent],
  imports: [AngularMaterialModule],
  exports: [AngularGridComponent]
})
export class GridModule { }
