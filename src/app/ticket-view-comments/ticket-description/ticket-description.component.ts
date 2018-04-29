import { AssigneeTicketUsers } from './../../models/tickets/assigned-ticket-users';
import { Component, OnInit, Input } from '@angular/core';
import { SingleTicket } from '../../models/tickets/single-ticket';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css']
})
export class TicketDescriptionComponent implements OnInit {
  @Input() ticket: SingleTicket;
  @Input() requester: AssigneeTicketUsers;
  constructor() { }

  ngOnInit() {
  }

}
