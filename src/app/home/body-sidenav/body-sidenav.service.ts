import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class BodySidenavService {
  private _open = true;
  public openingStatus: Subject<boolean> = new Subject();

  constructor() { }

  get opening(): boolean {
    return this._open;
  }

  set opening(value) {
    this._open = value;
    this.openingStatus.next(value);
  }

  startLoading() {
    this._open = true;
  }

  stopLoading() {
    this._open = false;
  }
}
