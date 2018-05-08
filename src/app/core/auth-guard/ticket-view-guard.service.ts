import { RequestService } from './../request.service.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenUser } from './../../models/user/token-user';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class TicketViewGuardService implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService, private reqService: RequestService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const ticketId: number = route.params.id;
    const user: TokenUser = this.authService.getUser();
    if (this.authService.isAuth()) {
      return this.reqService.post('/checkIfUserFromTeam', { ticketId: +ticketId, userId: user.id }).map((res) => {
        if (res) {
          return true;
        }
      }).catch(() => {
        return Observable.of(false);
      });
    } else {
      return true;
    }
  }
}
