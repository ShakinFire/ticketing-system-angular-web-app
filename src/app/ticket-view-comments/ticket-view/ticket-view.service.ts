import { CreateComment } from './../../models/comments/create-comment';
import { AllDataSingleTicket } from './../../models/tickets/all-data-single-ticket';
import { RequestService } from './../../core/request.service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { TicketComments } from '../../models/comments/ticket-comments';
import { SingleTicket } from '../../models/tickets/single-ticket';

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

  updateStatus(newStatus: { status: string, ticketId: number }): Observable<SingleTicket> {
    return this.reqService.post('/updateStatus', newStatus).pipe(map(res => res as SingleTicket));
  }

  newAssignee(changeAssigneePayload: { newId: number, ticketId: number }): Observable<{ name: string }> {
    return this.reqService.post('/updateAssignee', changeAssigneePayload).pipe(map(res => res as { name: string }))
  }

  newRequester(changeRequesterPayload: { newId: number, ticketId: number }): Observable<{ name: string }> {
    return this.reqService.post('/updateRequester', changeRequesterPayload).pipe(map(res => res as { name: string }))
  }
}
