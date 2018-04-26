import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HomeGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
}