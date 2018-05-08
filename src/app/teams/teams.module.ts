import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTeamComponent } from './generate-team/generate-team.component';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TicketsModule } from '../tickets/tickets.module';
import { TeamsService } from './generate-team/teams.service';
import { NotificationModule } from '../notification/notification.module';
import { NotificationService } from '../notification/notification.service';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  imports: [
    TeamsRoutingModule,
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbModule,
    AngularFontAwesomeModule,
    TicketsModule,
    NotificationModule
  ],
  declarations: [GenerateTeamComponent],
  providers: [TeamsService, NgbTypeaheadConfig, NgbTypeaheadModule, NotificationService],
  exports: [GenerateTeamComponent]
})
export class TeamsModule { }
