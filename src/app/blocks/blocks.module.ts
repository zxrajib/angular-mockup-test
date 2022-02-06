import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { AppComponent } from './root/app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

export const blockComponents = [AppComponent, NotFoundComponent];

@NgModule({
  declarations: [...blockComponents],
  imports: [CommonModule, BlocksRoutingModule, SharedModule],
  exports: [...blockComponents],
})
export class BlocksModule {}
