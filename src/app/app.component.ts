import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-task';
  // sidebar: HTMLDivElement | any = '';
  getSidebar(e: HTMLDivElement) {
    // console.log(e);
    // this.sidebar = e;
  }
}
