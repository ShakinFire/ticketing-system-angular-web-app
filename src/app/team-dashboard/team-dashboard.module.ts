import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDashboardRoutingModule } from './team-dashboard-routing.module';
import { TeamViewComponent } from './team-view/team-view.component';
import { TicketsModule } from '../tickets/tickets.module';
import { TeamQueueComponent } from './team-queue/team-queue.component';
import { TeamAsideComponent } from './team-aside/team-aside.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamSettingsComponent } from './team-settings/team-settings.component';
import { AddUserComponent } from './team-settings/add-user/add-user.component';
import { OptionsComponent } from './team-settings/options/options.component';
import { RemoveUserComponent } from './team-settings/remove-user/remove-user.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'ngx-moment';
import { TeamViewService } from './team-view/team-view.service';

@NgModule({
  imports: [
    CommonModule,
    TeamDashboardRoutingModule,
    TicketsModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgbModule,
    SharedModule,
    MomentModule,
  ],
  declarations: [
    TeamViewComponent,
    TeamQueueComponent,
    TeamAsideComponent,
    TeamMembersComponent,
    TeamSettingsComponent,
    AddUserComponent,
    OptionsComponent,
    RemoveUserComponent
  ],
  providers: [
    TeamViewService,
  ]
})
export class TeamDashboardModule { }
