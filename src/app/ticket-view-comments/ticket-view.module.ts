import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketViewRoutingModule } from './ticket-view-routing.module';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketDescriptionComponent } from './ticket-description/ticket-description.component';

@NgModule({
  imports: [
    CommonModule,
    TicketViewRoutingModule
  ],
  declarations: [TicketViewComponent, TicketDescriptionComponent]
})
export class TicketViewModule { }
