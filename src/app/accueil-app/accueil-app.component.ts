import { Component } from "@angular/core";
import { BUS } from "../liste/tana-bus-list";
import { Bus } from "../liste/bus";
import { Router } from "@angular/router";

@Component({
  selector: "app-accueil-app",
  templateUrl: "./accueil-app.component.html",
  styleUrls: ["./accueil-app.component.css"],
})
export class AccueilAppComponent {
  busList: Bus[] = BUS;
  busSelected: Bus | undefined;

  selectBus(Depart: string, Destination: string) {
    const transp: Bus | undefined = this.busList.find(
      (transp) =>
        (transp.depart == Depart && transp.destination == Destination) ||
        (transp.depart == Destination && transp.destination == Depart)
    );
    if (transp) {
      this.busSelected = transp;
    } else {
      this.busSelected = transp;
    }
  }

  constructor(private router: Router) {}

  goToDBUS(bus: Bus) {
    this.router.navigate(["/busListe", bus.ligne]);
  }
}
