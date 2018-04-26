import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTicketsComponent } from './generate-tickets/generate-tickets.component';
import { FormsModule } from '@angular/forms';
import { TicketsService } from './tickets.service';
import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
// import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule
    // TicketsRoutingModule
  ],
  declarations: [GenerateTicketsComponent],
  providers: [TicketsService, NgbTypeaheadConfig, NgbTypeaheadModule],
  exports: [GenerateTicketsComponent],
})
export class TicketsModule { }
