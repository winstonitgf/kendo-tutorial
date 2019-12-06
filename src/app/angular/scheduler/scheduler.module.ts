import { NgModule } from '@angular/core';
import { AngularSchedulerComponent } from './scheduler.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';

@NgModule({
  declarations: [AngularSchedulerComponent],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularSchedulerComponent
  ]
})
export class SchedulerModule { }
