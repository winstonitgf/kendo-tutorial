import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grid-init",
  templateUrl: "./grid-init.component.html",
  styleUrls: ["./grid-init.component.scss"]
})
export class GridInitComponent implements OnInit {
  @Input() show = false;
  constructor() {}

  ngOnInit() {}
}
