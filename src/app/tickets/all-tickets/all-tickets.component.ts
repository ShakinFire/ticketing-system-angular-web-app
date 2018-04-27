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
  tabId: number;
  assigTickets: AssigneeTicket;
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

  changeActive(id: number): void {
    this.tabId = id;
  }
}
