import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppNavbar } from "./navbar/app.navbar";
import { ListBusComponent } from './list-bus/list-bus.component';
import { DetailBusComponent } from './detail-bus/detail-bus.component';
import { AccueilAppComponent } from './accueil-app/accueil-app.component';
import { AboutAppComponent } from './about-app/about-app.component';

@NgModule({
  declarations: [AppComponent, AppNavbar, ListBusComponent, DetailBusComponent, AccueilAppComponent, AboutAppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, AppNavbar],
})
export class AppModule {}
