import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../core/request.service.service';

@Injectable()
export class TeamViewService {

  constructor(private reqService: RequestService) { }

  getTeamAndTickets(id: number): Observable<object> {
    const route: string = '/getTeamAndTickets/' + id;
    return this.reqService.get(route);
  }
}
