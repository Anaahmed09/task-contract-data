import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-navbar',
  templateUrl: './body-navbar.component.html',
  styleUrls: ['./body-navbar.component.css'],
})
export class BodyNavbarComponent {
  showSidebar(e: Event) {
    if (window.innerWidth > 767) return;
    const target = e.target as HTMLDivElement;
    target.classList.toggle('direction-sidebar');
    const sidebar = document.getElementById('sidebar')
      ?.parentElement as HTMLDivElement;
    sidebar.classList.toggle('d-xs-none');
  }
}
