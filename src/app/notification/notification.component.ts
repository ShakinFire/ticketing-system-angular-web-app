import { Component, OnInit } from '@angular/core';
import { AssignedTicketsService } from '../tickets/assigned-tickets/assigned-tickets.service';
import { AssigneeTicket } from '../models/tickets/assigned-ticket';
import { NotificationService } from './notification.service';
import { TeamsService } from '../teams/generate-team/teams.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications = [];
  userId = 1;

  constructor(private readonly notifService: NotificationService, private teamService: TeamsService) { }

  ngOnInit() {
    // this.notService.getTicket().subscribe((res) => {
    //   this.assigTickets = res.result;
    //   console.log(this.assigTickets);
    //   // console.log(res.result);
    // });
    // console.log('i am onInit');
    this.notifService.getNotification(this.userId).subscribe(res => {
      // console.log(res.result);
      this.notifications = res.result;

    });

  }
  accseptTeam(name) {
    // const teamName = name;
    const obj = {
      userId: this.userId,
      team: name
    };
    this.teamService.postUserInTeam(obj).subscribe(res => {
      console.log(res);
    })
  }

}
