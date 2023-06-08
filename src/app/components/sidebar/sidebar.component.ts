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
export class SidebarComponent {
  showRedBall(e: Event) {
    const target = e.target as HTMLImageElement;
    target.classList.toggle('rotate');
    const redBall = document.getElementById('redBall') as HTMLImageElement;
    redBall.classList.toggle('d-none');
  }
}
