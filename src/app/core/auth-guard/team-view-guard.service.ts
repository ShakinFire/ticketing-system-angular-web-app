import { AuthService } from './../auth/auth.service';
import { TokenUser } from './../../models/user/token-user';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../request.service.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class TeamViewGuardService implements CanActivate {

  constructor(private router: Router, private reqService: RequestService, private authService: AuthService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const teamId: number = route.params.id;
    const user: TokenUser = this.authService.getUser();
    // *TODO: research about observable return on guard services and why redirect isnt working
    return this.reqService.post('/checkIfPartOfTeam', { userId: user.id, teamId: teamId }).map(res => res as {isValid: boolean}).map((res) => {
      if (res.isValid && this.authService.isAuth()) {
        return true;
      }
    }).catch(() => {
      return Observable.of(false);
    });
  }
}
