import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked {
  title = 'project';
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private readonly cdRef: ChangeDetectorRef
  ) {}
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
  checkRouterEvent(routerEvent: Event): void {
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      /******************* set title *********************/
      const title = new Set();
      title.add('Authors');
      let child = this.activatedRoute.firstChild;
      while (child) {
        if (child?.snapshot?.data['title']) {
          title.add(child?.snapshot?.data['title']);
        }
        child = child?.firstChild;
      }
      this.titleService.setTitle(Array.from(title).join(':'));
    }
  }
}
