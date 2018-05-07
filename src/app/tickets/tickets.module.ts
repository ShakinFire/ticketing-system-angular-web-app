import { GenerateTicketsComponent } from './generate-tickets/generate-tickets.component';
import { FormsModule } from '@angular/forms';
import { TicketsService } from './tickets.service';
import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TicketsRoutingModule } from './tickets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedTicketsComponent } from './assigned-tickets/assigned-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { MyTeamDashboardComponent } from './my-teams-dashboard/my-team-dashboard.component';
import { MyTeamsDashboardService } from './my-teams-dashboard/my-teams-dashboard.service';
import { AssignedTicketsService } from './assigned-tickets/assigned-tickets.service';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    TicketsRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    SharedModule,
    MomentModule,
  ],
  declarations: [
    GenerateTicketsComponent,
    AssignedTicketsComponent,
    AllTicketsComponent,
    MyTeamDashboardComponent,

  ],
  providers: [
    TicketsService,
    MyTeamsDashboardService,
    AssignedTicketsService,
    NgbTypeaheadConfig,
    NgbTypeaheadModule,
  ],
  exports: [
    GenerateTicketsComponent,
    AssignedTicketsComponent,
  ],

})
export class TicketsModule { }
