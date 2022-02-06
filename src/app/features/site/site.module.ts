import { SiteLayoutModule } from "./../../blocks/site-layout/site-layout.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SiteRoutingModule } from "./site-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SiteLayoutModule, SiteRoutingModule, SharedModule],
})
export class SiteModule {}
