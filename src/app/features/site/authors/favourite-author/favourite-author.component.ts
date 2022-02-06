import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favourite-author",
  templateUrl: "./favourite-author.component.html",
  styleUrls: ["./favourite-author.component.css"],
})
export class FavouriteAuthorComponent implements OnInit {
  mapped: any[] = [];
  constructor() {}
  oldItem: any = [];

  ngOnInit(): void {
    this.showItem();
    // console.log("df", this.showItem());
  }
  showItem() {
    this.oldItem = JSON.parse(`${localStorage.getItem("item")}`);
    if (this.oldItem === undefined || this.oldItem === null) {
      this.mapped = [];
      return;
    }
    // console.log("this.oldItem", this.oldItem);

    this.mapped = Object.keys(this.oldItem).map((key) => this.oldItem[key]);
    console.log("this.oldItem", this.mapped);
  }

  removeFovourite(item: any) {
    let oldItem: any = JSON.parse(`${localStorage.getItem("item")}`);
    if (oldItem === undefined || oldItem === null) {
      return;
    }
    try {
      delete oldItem[item._id];
      localStorage.setItem("item", JSON.stringify(oldItem));
    } catch (error) {}
  }
}
