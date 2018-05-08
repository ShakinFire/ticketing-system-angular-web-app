import { AssigneeTicket } from './../../models/tickets/assigned-ticket';
import { Component, OnInit } from '@angular/core';
import { AssignedTicketsService } from '../assigned-tickets/assigned-tickets.service';
import 'rxjs/add/operator/map';
import { TicketModel } from '../../models/tickets/ticket-model';
import { MyTeamsDashboardService } from '../my-teams-dashboard/my-teams-dashboard.service';
import { myTeamsDash } from '../../models/teams/my-teams';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {
  assigTickets: AssigneeTicket[];
  myTeams: myTeamsDash[];
  tabId: number;
  notingHereSwitch: boolean;
  constructor(private assignedTickets: AssignedTicketsService, private teamService: MyTeamsDashboardService,
    private notificatiomService: NotificationService) { }

  ngOnInit() {
    this.tabId = 0;
    this.notingHereSwitch = false;
    this.assignedTicketsTab();
    // this.notificatiomService.getTicket().subscribe(res => {
    //   const tickets = res.result;
    //   console.log(tickets);
    //   for (let ticket of tickets) {
    //     if (ticket.status === 'open') {
    //       const notificationRequest = {
    //         content: `the ticket ${ticket.title} expires at ${ticket.estimated} `,
    //         type: 'ticket',
    //         nameType: ticket.title,
    //         userId: ticket.userId
    //       }
    //       console.log(notificationRequest);
    //       this.notificatiomService.addNotification(notificationRequest).subscribe(res =>
    //         console.log(res));
    //     }
    //   }
    // })

  }

  assignedTicketsTab(): void {
    this.assignedTickets.getAssigneeTicket()
      .subscribe((res) => {
        this.assigTickets = res.tickets;

        if (this.assigTickets.length === 0) {
          this.notingHereSwitch = true;
        } else {
          this.notingHereSwitch = false;
        }
      });
  }

  myTicketsTab(): void {
    this.assignedTickets.getMyTickets()
      .subscribe((res) => {
        this.assigTickets = res.tickets;
        if (this.assigTickets.length === 0) {
          this.notingHereSwitch = true;
        } else {
          this.notingHereSwitch = false;
        }
      });
  }

  myTeamsTab() {
    this.teamService.getMyTeams()
      .subscribe((res) => {
        this.myTeams = res.teams;
        if (this.myTeams.length === 0) {
          this.notingHereSwitch = true;
        } else {
          this.notingHereSwitch = false;
        }
      });
  }

  changeActive(id: number): void {
    this.tabId = id;

    if (id === 0) {
      this.assignedTicketsTab();
    } else if (id === 1) {
      this.myTicketsTab();
    } else {
      this.myTeamsTab();
    }
  }
}
