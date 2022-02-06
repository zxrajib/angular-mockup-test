import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/dashboards/header/header.component';
import { RouterModule } from '@angular/router';

const components = [HeaderComponent];
// const services = [];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedRoutingModule, RouterModule],
  exports: [RouterModule, ...components],
  providers: [],
})
export class SharedModule {}
