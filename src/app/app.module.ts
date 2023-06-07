import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/Body/body/body.component';
import { BodyNavbarComponent } from './components/Body/body-navbar/body-navbar.component';
import { ContractDataNavComponent } from './components/Body/contract-data-nav/contract-data-nav.component';
import { ContractTapsComponent } from './components/Body/contract-taps/contract-taps.component';
import { ContractButtonsComponent } from './components/Body/contract-buttons/contract-buttons.component';
import { ContractTableComponent } from './components/Body/contract-table/contract-table.component';
import { ContractAddNewComponent } from './components/Body/contract-add-new/contract-add-new.component';
import { ContractEmployeeDataComponent } from './components/Body/contract-employee-data/contract-employee-data.component';
import { ContractSideListComponent } from './components/Body/contract-side-list/contract-side-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    BodyComponent,
    BodyNavbarComponent,
    ContractDataNavComponent,
    ContractTapsComponent,
    ContractButtonsComponent,
    ContractTableComponent,
    ContractAddNewComponent,
    ContractEmployeeDataComponent,
    ContractSideListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
