import { AllDataSingleTicket } from './../../models/tickets/all-data-single-ticket';
import { RequestService } from './../../core/request.service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TicketViewService {

  constructor(private reqService: RequestService) { }

  getSingleTicket(id): Observable<AllDataSingleTicket> {
    const route: string = '/ticket-view/' + id;

    return this.reqService.get(route).pipe(map((res) => res as AllDataSingleTicket));
  }
}
