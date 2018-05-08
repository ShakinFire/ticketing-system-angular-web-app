import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../core/request.service.service';
import { myTeamsDash } from '../../models/teams/my-teams';


@Injectable()
export class TeamsService {
    constructor(private req: RequestService) { }

    getAllUsers(): Observable<{ users: myTeamsDash[] }> {
        const rout = '/allUsers';
        return this.req.get(rout).map(x => <{ users: myTeamsDash[] }>(x));

    }
    postNewTeam(team) {

        return this.req.post('/create-team', team);
    }

    postUserInTeam(team): Observable<object> {
        return this.req.post('/addUserInTeam', team);
    }

    getTeamId(name) {
        return this.req.get('/getTeamId/' + name);
    }
}