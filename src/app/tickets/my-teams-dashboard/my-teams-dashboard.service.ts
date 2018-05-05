import { Injectable } from '@angular/core';
import { RequestService } from '../../core/request.service.service';
import { AppConfig } from '../../config/app-config';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { TeamResponse } from '../../models/teams/my-team-response';
import { Router } from '@angular/router';

@Injectable()
export class MyTeamsDashboardService {

  constructor(private request: RequestService, private router: Router) { }

  getMyTeams(): Observable<TeamResponse> {
    return this.request.get('/getMyTeams').pipe(map((res) => res as TeamResponse));
  }

  goToTeam(id: number): void {
    const route = '/team-view/' + id;
    this.router.navigateByUrl(route);
  }
}
