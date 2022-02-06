import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorsRoutingModule } from "./authors-routing.module";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthorService } from "./sevices/author.service";
import { ListItemComponent } from "./list-item/list-item.component";
import { FavouriteAuthorComponent } from "./favourite-author/favourite-author.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [ListComponent, ListItemComponent, FavouriteAuthorComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
  providers: [AuthorService],
})
export class AuthorsModule {}
