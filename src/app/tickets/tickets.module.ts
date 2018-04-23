import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTicketsComponent } from './generate-tickets/generate-tickets.component';
import { FormsModule } from '@angular/forms';
import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TicketsRoutingModule
  ],
  declarations: [GenerateTicketsComponent],
  exports: [GenerateTicketsComponent],
})
export class TicketsModule { }
