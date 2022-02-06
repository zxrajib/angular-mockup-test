import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Author } from "../models/author";
import { AuthorService } from "../sevices/author.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public authors: Author[] = [];
  public config: any;
  public sl: number = 0;
  constructor(private authorService: AuthorService, private router: Router) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      start: 0,
      totalItems: 0,
    };
  }

  ngOnInit(): void {
    this.getAllAuthorlist();
  }
  getAllAuthorlist() {
    const skip = this.config.itemsPerPage * (this.config.currentPage - 1);
    const limit = this.config.itemsPerPage;
    this.authorService
      .authorList(limit, skip)
      .subscribe((author: Record<string, any>) => {
        this.sl = (this.config.currentPage - 1) * this.config.itemsPerPage;
        this.config.totalItems = author["totalCount"];
        this.authors = author["results"];
        console.log(this.authors);
        console.log(this.config.totalItems);
      });
  }
  pageChanged(event: any) {
    this.config.currentPage = event;
    this.config.start =
      (this.config.currentPage - 1) * this.config.itemsPerPage;
    this.ngOnInit();
  }
  onChange(itemsLimit: any) {
    this.config.itemsPerPage = itemsLimit;
    this.ngOnInit();
  }
}
