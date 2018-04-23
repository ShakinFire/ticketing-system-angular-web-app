import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay'
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginUser } from '../../models/user/login-user';
import { RegUser } from '../../models/user/reg-user';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../config/app-config';

@Injectable()
export class AuthService {

  constructor(private config: AppConfig, private http: HttpClient) { }

  login(user: LoginUser): Observable<object> {
    return this.http.post<object>(`${this.config.apiUrl}/login`, user)
      .do(res => this.setSession(res))
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

  getExpiration() {
    const expiration = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
