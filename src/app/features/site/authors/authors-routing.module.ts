import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavouriteAuthorComponent } from "./favourite-author/favourite-author.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "list",
    component: ListComponent,
    data: { title: "List" },
  },
  {
    path: "favourite-list",
    component: FavouriteAuthorComponent,
    data: { title: "Favourtie List" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
