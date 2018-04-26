import { AssigneeTicket } from './../../models/tickets/assigned-ticket';
import { Component, OnInit } from '@angular/core';
import { AssignedTicketsService } from '../assigned-tickets/assigned-tickets.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {
  assigTickets: AssigneeTicket;
  tabId: number;
  constructor(private assignedTickets: AssignedTicketsService) { }

  ngOnInit() {
    this.tabId = 0;
    this.assignedTicketsTab();
  }

  assignedTicketsTab() {
    this.assignedTickets.getAssigneeTicket()
      .map((res) => <{tickets: AssigneeTicket}>(res))
      .subscribe((res) => {
        this.assigTickets = res.tickets; 
      });
  }

  myTicketsTab() {
    this.assignedTickets.getMyTickets()
      .map((res) => <{tickets: AssigneeTicket}>(res))
      .subscribe((res) => {
        this.assigTickets = res.tickets;
      });
  }

  myTeamsTab() {

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
