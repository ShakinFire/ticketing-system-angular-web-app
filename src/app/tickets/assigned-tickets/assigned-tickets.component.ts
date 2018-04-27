import { AssigneeTicket } from './../../models/tickets/assigned-ticket';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css']
})
export class AssignedTicketsComponent implements OnInit {
  @Input() ticket: AssigneeTicket;
  constructor() { }

  ngOnInit() {

  }

}
