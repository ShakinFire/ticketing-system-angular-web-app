import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class AssignedTicketsService {

  constructor(private config: AppConfig, private http: HttpClient) {}

  getAssigneeTicket(): Observable<object> {
    return this.http.get<object>(`${this.config.apiUrl}/getAllAssignedTickets`);
  }
}
