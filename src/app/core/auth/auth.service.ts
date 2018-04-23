import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay'
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginRegisterUser } from '../../models/user/login-register-user';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(private config: AppConfig, private http: HttpClient, private jwtService: JwtHelperService) { }

  login(user: LoginRegisterUser, route: string): Observable<object> {
    return this.http.post<object>(`${this.config.apiUrl}${route}`, user)
      .do(res => this.setSession(res))
      .shareReplay();
  }

  // Testing auth
  test(): Observable<object> {
    return this.http.post<object>(`${this.config.apiUrl}/test`, {})
      .do(res => console.log(res))
      .shareReplay();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    
    if (!authResult.message) {
      localStorage.setItem('token', authResult.token);
      localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()));
    }
  }

  public isAuth(): boolean{
    const token = this.jwtService.tokenGetter();

    return !!token;
  }

  getExpiration() {
    const expiration = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
