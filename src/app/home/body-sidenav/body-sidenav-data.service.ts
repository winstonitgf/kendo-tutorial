import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodySidenavDataService {

  constructor() { }

  public getSessionList() {
    return [
      {
        id: 1,
        name: 'Jquery',
        lists: [
          {
            name: '環境準備',
            route: '/home/install-guide'
          },
          {
            name: '表單',
            route: '/home/register-form'
          },
          {
            name: 'Grid',
            route: '/home/grid'
          },
          {
            name: '圖表',
            route: '/home/chart'
          }
        ]
      },
      {
        id: 2,
        name: 'Angular',
        lists: []
      },
      {
        id: 3,
        name: 'React',
        lists: []
      },
      {
        id: 4,
        name: 'Vue',
        lists: []
      }
    ];
  }
}
