import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chart-init",
  templateUrl: "./chart-init.component.html",
  styleUrls: ["./chart-init.component.scss"]
})
export class ChartInitComponent implements OnInit {
  @Input() show = false;
  constructor() {}

  ngOnInit() {}
}
