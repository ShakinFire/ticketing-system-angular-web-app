import { NgForm } from '@angular/forms';
import { CreateComment } from './../../models/comments/create-comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { TokenUser } from '../../models/user/token-user';
import { TicketViewService } from '../ticket-view/ticket-view.service';
import { TicketComments } from '../../models/comments/ticket-comments';

@Component({
  selector: 'app-ticket-create-comment',
  templateUrl: './ticket-create-comment.component.html',
  styleUrls: ['./ticket-create-comment.component.css']
})
export class TicketCreateCommentComponent implements OnInit {
  commentData: CreateComment;
  @Input() id: number;
  constructor(private authService: AuthService) { }
  @Output() outputCommentDat = new EventEmitter<CreateComment>();
  ngOnInit() {
  }

  addComment(form: NgForm): boolean {
    if (form.value.content === null || form.value.content.length === 0) {
      // *TODO: put an error 'empty comments not allowed'
    } else {
      const userId: TokenUser = this.authService.getUser();
      this.commentData = form.value;
      this.commentData.ticketId = this.id;
      this.commentData.userId = userId.id;
      this.outputCommentDat.emit(this.commentData);
      // *TODO: add to notifications
    }

    form.reset();
    return false;
  }

}
