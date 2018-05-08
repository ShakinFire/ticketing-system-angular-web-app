import { Router } from '@angular/router';
import { AssigneeTicket } from './../../models/tickets/assigned-ticket';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AssignedTicketsService } from './assigned-tickets.service';

@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css']
})
export class AssignedTicketsComponent implements OnInit {
  @Input() ticket: AssigneeTicket;
  @Input() tabId: number;
  ticketId: string;
  constructor(private el: ElementRef, private assignedTickets: AssignedTicketsService, private router: Router) { }

  ngOnInit() {
  }

  openTicket(edit: boolean, id: number): boolean {
    if (edit) {
      // *TODO: sends ticketId to service to get the edit ticket
    } else {
      this.assignedTickets.goToTicket(id);
    }

    return false;
  }

  goToTeam(teamId: number): void {
    console.log('yes');
    const route = '/team-view/' + teamId;
    this.router.navigateByUrl(route);
  }
}
