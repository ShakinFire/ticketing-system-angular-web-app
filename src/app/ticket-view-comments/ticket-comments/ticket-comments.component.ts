import { TicketComments } from './../../models/comments/ticket-comments';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-comments',
  templateUrl: './ticket-comments.component.html',
  styleUrls: ['./ticket-comments.component.css']
})
export class TicketCommentsComponent implements OnInit {
  @Input() comment: TicketComments;
  constructor() { }

  ngOnInit() {
  }

}
