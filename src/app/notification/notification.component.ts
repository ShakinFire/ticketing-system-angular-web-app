import { Component, OnInit } from '@angular/core';
import { AssignedTicketsService } from '../tickets/assigned-tickets/assigned-tickets.service';
import { AssigneeTicket } from '../models/tickets/assigned-ticket';
import { NotificationService } from './notification.service';
import { TeamsService } from '../teams/generate-team/teams.service';
import { NewNotification } from '../models/notifications/new-notification';
import { AuthService } from '../core/auth/auth.service';
import { TokenUser } from '../models/user/token-user';
import { TicketsService } from '../tickets/tickets.service';
import { MyTeamsDashboardService } from '../tickets/my-teams-dashboard/my-teams-dashboard.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: NewNotification[];
  user: TokenUser;
  ticket: any;
  team: any;

  constructor(private readonly notifService: NotificationService, private teamService: TeamsService,
    private authService: AuthService, private ticketService: TicketsService,
    private viewTicketService: AssignedTicketsService, private teamViewService: MyTeamsDashboardService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.notifService.getNotification(this.user.id).subscribe(res => {
      this.notifications = res.result;
      this.notifications.reverse();
      console.log(this.notifications);
    });
  }


  accseptTeam(name, notificationId) {
    const obj = {
      userId: this.user.id,
      team: name,
    };
    console.log(notificationId);
    this.teamService.postUserInTeam(obj).subscribe();
    this.notifService.updateNotification(notificationId).subscribe(data => console.log(data));

  }

  viewTicket(name) {

    this.ticketService.getTicketByName(name).subscribe(res => {
      this.ticket = res;
      const ticketId = this.ticket.ticket.id;
      this.viewTicketService.goToTicket(ticketId);
    });
  }
  viewTeam(name) {
    this.teamService.getTeamId(name).subscribe(res => {
      this.team = res;
      console.log(this.team);
      const teamId = this.team.id;
      this.teamViewService.goToTeam(teamId);
    });
  }
}
