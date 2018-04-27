import { RequestService } from './../../core/request.service.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';
import { TicketModel } from '../../models/tickets/ticket-model';
import { map } from 'rxjs/operators';

@Injectable()
export class AssignedTicketsService {

  constructor(private reqService: RequestService) { }

  getAssigneeTicket(): Observable<TicketModel> {
    return this.reqService.get('/getAllAssignedTickets').pipe(map((res) => res as TicketModel));
  }

  getMyTickets(): Observable<TicketModel> {
    return this.reqService.get('/getAllMyTickets').pipe(map((res) => res as TicketModel));
  }
}
