import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css'],
})
export class ContractTableComponent implements AfterViewInit {
  ngAfterViewInit(): void {}
  showData(e: Event) {
    const target = e.target as HTMLTableRowElement;
    const rowData = target.parentElement?.nextElementSibling;
    const image = target.parentElement?.lastElementChild
      ?.lastElementChild as HTMLImageElement;
    image.classList.toggle('rotate-90');
    rowData?.classList.toggle('d-none');
  }
}
