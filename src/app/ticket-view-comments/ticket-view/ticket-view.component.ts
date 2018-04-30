import { AssigneeTicketUsers } from './../../models/tickets/assigned-ticket-users';
import { TicketViewService } from './ticket-view.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleTicket } from '../../models/tickets/single-ticket';
import { TicketComments } from '../../models/comments/ticket-comments';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {
  sub: any;
  id: number;
  ticket: SingleTicket;
  requester: AssigneeTicketUsers;
  assignee: AssigneeTicketUsers;
  newComment: TicketComments;
  constructor(private route: ActivatedRoute, private ticketView: TicketViewService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];

      this.ticketView.getSingleTicket(this.id).subscribe((res) => {
        this.ticket = res.ticket;
        this.requester = res.requester;
        this.assignee = res.assignee;
      });
    });
  }

  commentFromChild(commentData) {
    this.ticketView.postComment(commentData).subscribe((res) => {
      this.ticket.comments.push(res.comment);
      console.log(this.ticket.comments);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
