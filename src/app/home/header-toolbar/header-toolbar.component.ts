import { Component, OnInit } from '@angular/core';
import { BodySidenavService } from '../body-sidenav/body-sidenav.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(private _bodySidenavService: BodySidenavService) { }

  ngOnInit() {
  }

  public menuClick() {
    this._bodySidenavService.opening = !this._bodySidenavService.opening;
  }
}
