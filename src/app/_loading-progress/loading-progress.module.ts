import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingProgressComponent } from './loading-progress.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingProgressInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    LoadingProgressComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingProgressInterceptor,
      multi: true
    }
  ],
  exports: [
    LoadingProgressComponent
  ]
})
export class LoadingProgressModule { }
