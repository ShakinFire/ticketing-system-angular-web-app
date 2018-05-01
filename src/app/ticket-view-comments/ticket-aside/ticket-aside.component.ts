import { Component, OnInit, Input } from '@angular/core';
import { AssigneeTicketUsers } from '../../models/tickets/assigned-ticket-users';
import { SingleTicket } from '../../models/tickets/single-ticket';

@Component({
  selector: 'app-ticket-aside',
  templateUrl: './ticket-aside.component.html',
  styleUrls: ['./ticket-aside.component.css']
})
export class TicketAsideComponent implements OnInit {
  @Input() ticket: SingleTicket;
  @Input() requester: AssigneeTicketUsers;
  @Input() assignee: AssigneeTicketUsers;
  constructor() { }

  ngOnInit() {
  }

}
