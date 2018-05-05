import { Injectable } from '@angular/core';
import { RequestService } from '../core/request.service.service';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs/Observable';
import { myTeamsDash } from '../models/teams/my-teams';
import { SingleTicket } from '../models/tickets/single-ticket';

@Injectable()
export class TicketsService {

  constructor(private req: RequestService) { }

  addTicket(ticket: Ticket) {
    return this.req.post('/create-ticket', ticket).subscribe((res) => {
      console.log(res);
    });
  }
  getUserTeams(id: Number): Observable<{ teams: String[] }> {
    const rout = '/user-teams/' + id;
    return this.req.get(rout).map(x => <{ teams: String[] }>(x));

  }
  getTeamUsers(team): Observable<{ users: myTeamsDash[] }> {
    const rout = '/teams-users/' + team;
    return this.req.get(rout).map(x => <{ users: myTeamsDash[] }>(x));
  }
  getTicketByName(name: String): Observable<{ ticket: SingleTicket }> {
    const rout = '/ticketByName/' + name;
    return this.req.get(rout).map(x => <{ ticket: SingleTicket }>(x));
  }
}
