import { Injectable } from '@angular/core';
import { RequestService } from '../core/request.service.service';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TicketsService {

  constructor(private req: RequestService) { }

  addTicket(ticket: Ticket) {
    return this.req.post('/create-ticket', ticket).subscribe((res) => {
      console.log(res);
    });
  }
  getUserTeams(id): Observable<any> {
    const rout = '/user-teams/' + id;
    return this.req.get(rout).map(x => <any>(x))

  }
  getTeamUsers(team) {
    const rout = '/teams-users/' + team;
    return this.req.get(rout).map(x => <any>(x));

  }
  getTicketByName(name) {
    const rout = '/ticketByName/' + name;
    console.log(rout);
    return this.req.get(rout)//.subscribe((res) =>
    //     console.log(res));
    // }

  }
