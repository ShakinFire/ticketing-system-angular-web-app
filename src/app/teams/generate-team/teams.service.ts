import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../core/request.service.service';


@Injectable()
export class TeamsService {



    constructor(private req: RequestService) { }


    getAllUsers(): Observable<any> {
        const rout = '/allUsers';
        console.log('a am here');
        const users = this.req.get(rout).map(x => <any>(x));
        console.log(users);
        return users;

    }
    postNewTeam(team) {

        return this.req.post('/create-team', team);
    }

    postUserInTeam(team) {
        return this.req.post('/addUserInTeam', team);
    }


}