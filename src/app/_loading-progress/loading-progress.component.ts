import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingProgressService } from './loading-progress.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.scss']
})
export class LoadingProgressComponent implements OnInit, OnDestroy {
  loading = false;
  loadingSubscription: Subscription;
  constructor(private _loadingProgressService: LoadingProgressService) { }

  ngOnInit() {
    this.loadingSubscription = this._loadingProgressService.loadingStatus
      .pipe(debounceTime(200))
      .subscribe((value) => {
        this.loading = value;
      });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
