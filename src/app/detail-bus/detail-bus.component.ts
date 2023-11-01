import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Bus } from "../liste/bus";
import { BUS } from "../liste/tana-bus-list";

@Component({
  selector: "app-detail-bus",
  templateUrl: "./detail-bus.component.html",
})
export class DetailBusComponent implements OnInit {
  busList: Bus[];
  bus: Bus | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.busList = BUS;
    const busLigne: string | null = this.route.snapshot.paramMap.get("ligne");

    if (busLigne) {
      this.bus = this.busList.find((bus) => bus.ligne == busLigne);
    }
  }
}
