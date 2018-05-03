import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDashboardRoutingModule } from './team-dashboard-routing.module';
import { TeamViewComponent } from './team-view/team-view.component';
import { TicketsModule } from '../tickets/tickets.module';
import { TeamQueueComponent } from './team-queue/team-queue.component';

@NgModule({
  imports: [
    CommonModule,
    TeamDashboardRoutingModule,
    TicketsModule,
  ],
  declarations: [
    TeamViewComponent,
    TeamQueueComponent
  ],
})
export class TeamDashboardModule { }
