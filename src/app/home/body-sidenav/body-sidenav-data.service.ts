import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodySidenavDataService {

  constructor() { }

  public getKendoList() {
    return [
      {
        id: 1,
        name: 'Jquery',
        lists: [
          {
            name: '環境準備',
            route: '/jquery/install-guide'
          },
          {
            name: '表單',
            route: '/jquery/register-form'
          },
          {
            name: 'Grid',
            route: '/jquery/grid'
          },
          {
            name: '圖表',
            route: '/jquery/chart'
          }
        ]
      },
      {
        id: 2,
        name: 'Angular',
        lists: [
          {
            name: 'Grid',
            route: '/angular/grid'
          },
          {
            name: '行事歷',
            route: '/angular/scheduler'
          },
          {
            name: '表單元件',
            route: '/angular/input'
          },
          {
            name: '圖表',
            route: '/angular/chart'
          },
        ]
      },
      {
        id: 3,
        name: 'Vue',
        lists: [
          {
            name: 'Grid',
            route: '/vue/grid'
          },
          {
            name: '圖表',
            route: '/vue/chart'
          },
          {
            name: '表單',
            route: '/vue/form'
          },
          {
            name: '行事曆',
            route: '/vue/scheduler'
          },
        ]
      },
      // {
      //   id: 4,
      //   name: 'React',
      //   lists: []
      // }
    ];
  }

  public getProductsList() {
    return [{ text: "Kendo", value: "kendo" }, { text: "Infragistics", value: "infragistics" }]
  }

  public getInfragisticsList() {
    return [
      {
        id: 1,
        name: 'Jquery',
        lists: [
          {
            name: '準備中',
            route: ''
          },
        ]
      },
      {
        id: 2,
        name: 'Angular',
        lists: [
          {
            name: '準備中',
            route: ''
          },
        ]
      },
      {
        id: 3,
        name: 'Vue',
        lists: [
          {
            name: '準備中',
            route: ''
          },
        ]
      }
    ];
  }
}
