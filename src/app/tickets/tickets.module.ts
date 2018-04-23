import { TicketsRoutingModule } from './tickets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedTicketsComponent } from './assigned-tickets/assigned-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';

@NgModule({
  imports: [
    CommonModule,
    TicketsRoutingModule,
  ],
  declarations: [
    AssignedTicketsComponent,
    AllTicketsComponent
  ]
})
export class TicketsModule { }
