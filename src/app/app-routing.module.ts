import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListBusComponent } from "./list-bus/list-bus.component";
import { DetailBusComponent } from "./detail-bus/detail-bus.component";
import { AccueilAppComponent } from "./accueil-app/accueil-app.component";
import { AboutAppComponent } from "./about-app/about-app.component";

const routes: Routes = [
  { path: "accueil", component: AccueilAppComponent },
  { path: "busListe", component: ListBusComponent },
  { path: "busListe/:ligne", component: DetailBusComponent },
  { path: "about", component: AboutAppComponent },
  { path: "", redirectTo: "busListe", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
