import { Component, Input, OnInit } from "@angular/core";
import { Author } from "../models/author";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
})
export class ListItemComponent implements OnInit {
  @Input() itemData: any = [];

  status: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log("itemData", this.itemData);
  }
  addFovourite(item: any) {
    let oldItem: any = JSON.parse(`${localStorage.getItem("item")}`);
    if (oldItem === undefined || oldItem === null) {
      oldItem = {};
    }
    oldItem[item._id] = item;
    // console.log({ oldItem });
    localStorage.setItem("item", JSON.stringify(oldItem));
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
