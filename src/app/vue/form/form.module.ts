import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueFormComponent } from './form.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { InputsComponent } from './components/inputs/inputs.component';
import { DateInputsComponent } from './components/date-inputs/date-inputs.component';
import { UploadComponent } from './components/upload/upload.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [VueFormComponent, InputsComponent, DateInputsComponent, UploadComponent, DropdownComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class FormModule { }
