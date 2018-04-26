import { RequestService } from './../../core/request.service.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class AssignedTicketsService {

  constructor(private config: AppConfig, private reqService: RequestService) {}

  getAssigneeTicket(): Observable<object> {
    return this.reqService.get('/getAllAssignedTickets');
  }

  getMyTickets(): Observable<object> {
    return this.reqService.get('/getAllMyTickets');
  }
}
