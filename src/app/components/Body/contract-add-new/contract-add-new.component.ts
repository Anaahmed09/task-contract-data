import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-add-new',
  templateUrl: './contract-add-new.component.html',
  styleUrls: ['./contract-add-new.component.css'],
})
export class ContractAddNewComponent {
  showForm(e: Event) {
    document.getElementById('formNewData')?.classList.toggle('d-none');
  }
}
