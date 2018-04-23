import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenId = localStorage.getItem('token');

        if (tokenId) {
            const clone = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + tokenId),
            });

            return next.handle(clone);
        } else {
            return next.handle(req);
        }
    }
    
}