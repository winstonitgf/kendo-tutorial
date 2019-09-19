import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class AngularMaterialModule { }
