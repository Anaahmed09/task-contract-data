import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterViewInit {
  redBall: HTMLElement | any;
  @Output() eventSendSidebar = new EventEmitter();
  sidebar: HTMLElement | any;
  ngAfterViewInit(): void {
    this.redBall = document.getElementById('redBall');
    this.sidebar = document.getElementById('sidebar');
    this.eventSendSidebar.emit(this.sidebar);
  }
  showRedBall(e: Event) {
    const target = e.target as HTMLImageElement;
    target.classList.toggle('rotate');
    this.redBall.classList.toggle('d-none');
  }
}
