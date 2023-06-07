import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterContentInit {
  redBall: HTMLElement | any;
  ngAfterContentInit(): void {
    this.redBall = document.getElementById('redBall');
  }
  showRedBall(e: Event) {
    const target = e.target as HTMLImageElement;
    target.classList.toggle('rotate');
    this.redBall.classList.toggle('d-none');
  }
}
