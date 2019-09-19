import { Component, OnInit } from '@angular/core';
import { BodySidenavService } from './body-sidenav.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { BodySidenavDataService } from './body-sidenav-data.service';

@Component({
  selector: 'app-body-sidenav',
  templateUrl: './body-sidenav.component.html',
  styleUrls: ['./body-sidenav.component.scss']
})
export class BodySidenavComponent implements OnInit {
  public panelOpenState = true;
  private openingSubscription: Subscription;
  public sessionListDatas;

  constructor(
    private _bodySidenavService: BodySidenavService,
    private _bodySidenavDataService: BodySidenavDataService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.sessionListDatas = this._bodySidenavDataService.getSessionList();

    this.openingSubscription = this._bodySidenavService.openingStatus.subscribe(
      x => {
        this.panelOpenState = x;
      }
    );
  }
}
