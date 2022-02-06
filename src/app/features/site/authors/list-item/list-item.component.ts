import { Component, Input, OnInit } from "@angular/core";
import { Author } from "../models/author";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"],
})
export class ListItemComponent implements OnInit {
  @Input() itemData: any = [];
  @Input() isFavourite: boolean = false;

  isShow: boolean = true;

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

      if (this.isFavourite) {
        this.isShow = false;
        // console.log(item);
        // console.log(this.itemData);

        // const keys: string[] = Object.keys(this.itemData);
        // console.log(keys);

        // let index = keys.indexOf(`${item._id}`);

        // this.itemData.splice(index, 1);

        // console.log(this.itemData);
      }

      localStorage.setItem("item", JSON.stringify(oldItem));
    } catch (error) {}
  }

  findItem(_id: string): boolean {
    let oldItem: any = JSON.parse(`${localStorage.getItem("item")}`);
    if (oldItem === undefined || oldItem === null) {
      return false;
    }
    const keys: string[] = Object.keys(oldItem);
    // console.log(keys);
    return keys.indexOf(`${_id}`) > -1 ? true : false;
  }
}
