import { AssigneeTicketUsers } from './../../models/tickets/assigned-ticket-users';
import { TicketViewService } from './ticket-view.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleTicket } from '../../models/tickets/single-ticket';
import { TicketComments } from '../../models/comments/ticket-comments';
import { TokenUser } from '../../models/user/token-user';
import { AuthService } from '../../core/auth/auth.service';
import { NotificationService } from '../../notification/notification.service';

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
  loggedUser: TokenUser;
  constructor(private route: ActivatedRoute, private ticketView: TicketViewService, private authService: AuthService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((param) => {
      this.id = +param['id'];

      this.ticketView.getSingleTicket(this.id).subscribe((res) => {
        this.ticket = res.ticket;
        this.requester = res.requester;
        this.assignee = res.assignee;
      });
    });
    this.loggedUser = this.authService.getUser();
  }

  commentFromChild(commentData) {
    this.ticketView.postComment(commentData).subscribe((res) => {
      this.ticket.comments.push(res.comment);
      console.log(this.ticket.comments);
    });
    const notificationNewComentfromAssignee = {
      content: `${this.loggedUser.firstName} comment ticket ${this.ticket.title}`,
      type: 'ticket',
      nameType: this.ticket.title,
      userId: this.assignee.id
    }
    this.notificationService.addNotification(notificationNewComentfromAssignee).subscribe();
    if (this.assignee.id !== this.requester.id) {
      const notificationNewComentfromRequester = {
        content: `${this.loggedUser.firstName} comment ticket ${this.ticket.title}`,
        type: 'ticket',
        nameType: this.ticket.title,
        userId: this.requester.id
      }
      this.notificationService.addNotification(notificationNewComentfromRequester).subscribe();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
