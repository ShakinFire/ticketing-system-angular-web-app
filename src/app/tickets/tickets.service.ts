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
    console.log('i am uset-teams');
    return this.req.get(rout).map(x => <any>(x))

  }
  getTeamUsers(team) {
    const rout = '/teams-users/' + team;
    console.log('i am teams-user');
    return this.req.get(rout).map(x => <any>(x));

  }

}
