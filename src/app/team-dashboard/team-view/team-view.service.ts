import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../core/request.service.service';
import { TeamQueue } from '../../models/teams/team-queue';
import { map } from 'rxjs/operators';

@Injectable()
export class TeamViewService {

  constructor(private reqService: RequestService) { }

  getTeamAndTickets(id: number): Observable<TeamQueue> {
    const route: string = '/getTeamAndTickets/' + id;
    return this.reqService.get(route).pipe(map(res => res as TeamQueue));
  }
}
