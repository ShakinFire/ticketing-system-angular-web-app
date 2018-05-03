import { Component, OnInit } from '@angular/core';
import { AssignedTicketsService } from '../tickets/assigned-tickets/assigned-tickets.service';
import { AssigneeTicket } from '../models/tickets/assigned-ticket';
import { NotificationService } from './notification.service';
import { TeamsService } from '../teams/generate-team/teams.service';
import { NewNotification } from '../models/notifications/new-notification';
import { AuthService } from '../core/auth/auth.service';
import { TokenUser } from '../models/user/token-user';
import { TicketsService } from '../tickets/tickets.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: NewNotification[];
  user: TokenUser;
  ticket: any;

  constructor(private readonly notifService: NotificationService, private teamService: TeamsService,
    private authService: AuthService, private ticketService: TicketsService,
    private viewTicketService: AssignedTicketsService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.notifService.getNotification(this.user.id).subscribe(res => {
      this.notifications = res.result;
    });
  }
  // ngOnInit() {
  //   this.user = this.authService.getUser();
  //   this.notifService.getNotification(this.user.id).subscribe(res => {
  //     this.notifications = res.result;
  //   });
  // }

  accseptTeam(name) {
    const obj = {
      userId: this.user.id,
      team: name,
    };
    this.teamService.postUserInTeam(obj).subscribe();
  }

  viewTicket(name) {

    this.ticketService.getTicketByName(name).subscribe(res => {
      this.ticket = res;
      // console.log(this.ticket.ticket)
      const ticketId = this.ticket.ticket.id;
      this.viewTicketService.goToTicket(ticketId);

    });




  }
}
