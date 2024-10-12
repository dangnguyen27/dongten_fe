import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenService } from '../services/authen.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenService: AuthenService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const account = this.authenService.currentUserValue;
        console.log("JwtInterceptor", account);
        const isLoggedIn = account?.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        const isSocket = request.url.startsWith(environment.socketUrl);
        console.log("JwtInterceptor",request.url, isSocket)
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${account.token}` }
            });
        }

        return next.handle(request);
    }
}