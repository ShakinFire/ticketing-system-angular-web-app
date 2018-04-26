import { AssigneeTicket } from './../../models/tickets/assigned-ticket';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css']
})
export class AssignedTicketsComponent implements OnInit {
  @Input() ticket: AssigneeTicket;
  @Input() tabId: number;
  ticketId: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  openTicket(edit): boolean {
    // *TODO: ticketId is a string, should be parsed to int
    this.ticketId = this.el.nativeElement.children[0].getAttribute('ticketId');

    if (edit) {
      // *TODO: sends ticketId to service to edit the ticket
    } else {
      // *TODO: sends ticketId to service to get the ticket
    }

    return false;
  }
}
