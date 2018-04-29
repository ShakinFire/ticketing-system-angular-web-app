import { AppConfig } from './../../config/app-config';
import { RequestService } from './../../core/request.service.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketModel } from '../../models/tickets/ticket-model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AssignedTicketsService {

  constructor(private reqService: RequestService, private router: Router, private config: AppConfig) { }

  getAssigneeTicket(): Observable<TicketModel> {
    return this.reqService.get('/getAllAssignedTickets').pipe(map((res) => res as TicketModel));
  }

  getMyTickets(): Observable<TicketModel> {
    return this.reqService.get('/getAllMyTickets').pipe(map((res) => res as TicketModel));
  }

  goToTicket(id): void {
    const route = '/ticket-view/' + id;
    this.router.navigateByUrl(route);
  }
}
