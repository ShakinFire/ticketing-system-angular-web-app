import { CreateComment } from './../../models/comments/create-comment';
import { AllDataSingleTicket } from './../../models/tickets/all-data-single-ticket';
import { RequestService } from './../../core/request.service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { TicketComments } from '../../models/comments/ticket-comments';

@Injectable()
export class TicketViewService {

  constructor(private reqService: RequestService) { }

  getSingleTicket(id): Observable<AllDataSingleTicket> {
    const route: string = '/ticket-view/' + id;

    return this.reqService.get(route).pipe(map((res) => res as AllDataSingleTicket));
  }

  postComment(comment: CreateComment): Observable<{ comment: TicketComments }> {
    return this.reqService.post('/createComment', comment).pipe(map((res) => res as { comment: TicketComments }));
  }
}
