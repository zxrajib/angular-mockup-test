import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { SharedModule } from "src/app/shared/shared.module";
import { SideNavComponent } from "./side-nav/side-nav.component";

@NgModule({
  declarations: [LayoutComponent, SideNavComponent],
  imports: [CommonModule, SharedModule],
  exports: [LayoutComponent],
})
export class SiteLayoutModule {}
