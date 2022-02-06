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
    const start = this.config.start;
    const limit = this.config.itemsPerPage;
    this.authorService
      .authorList(start, limit)
      .subscribe((author: Record<string, any>) => {
        console.log(author);
        this.authors = author["results"];

        // this.authors = author.results;
      });
  }
}
