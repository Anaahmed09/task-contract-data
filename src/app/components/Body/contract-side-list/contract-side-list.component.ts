import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-side-list',
  templateUrl: './contract-side-list.component.html',
  styleUrls: ['./contract-side-list.component.css'],
})
export class ContractSideListComponent {
  showDetails(e: Event) {
    const target = e.target as HTMLUListElement;
    target.firstElementChild?.classList.toggle('rotate-90');
    target.nextElementSibling?.classList.toggle('d-none');
  }
}
