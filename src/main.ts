import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { AppNavbar } from "./app/navbar/app.navbar";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppNavbar)
  .catch((err) => console.error(err));
