import { Injectable } from '@angular/core';
import { AppConfig } from '../config/app-config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient, private reqDomain: AppConfig) { }

  get(rout: string, headers?: HttpHeaders): Observable<object> {
    return this.http.get<object>(this.reqDomain.apiUrl + rout, { headers });
  }

  post(rout: string, body: any, headers?: HttpHeaders): Observable<object> {
    return this.http.post<object>(this.reqDomain.apiUrl + rout, body, { headers });
  }

  put(rout: string, body: any, headers?: HttpHeaders): Observable<object> {
    return this.http.put<object>(this.reqDomain.apiUrl + rout, body, { headers });
  }
}
