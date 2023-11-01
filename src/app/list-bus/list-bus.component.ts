import { Component } from "@angular/core";
import { Bus } from "../liste/bus";
import { BUS } from "../liste/tana-bus-list";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-bus",
  templateUrl: "./list-bus.component.html",
})
export class ListBusComponent {
  busList: Bus[] = BUS;

  constructor(private router: Router) {}

  goToDBUS(bus: Bus) {
    this.router.navigate(["/busListe", bus.ligne]);
  }
}
