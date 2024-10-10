import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ObjectLocalStorage } from "../utils/constants";

@Injectable({ providedIn: 'root' })
export class AuthenService {
    public currentUser: Observable<any> ;
    public currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private _http: HttpClient) {
        const cUser: any = localStorage.getItem(ObjectLocalStorage.CURRENT_USER) ? localStorage.getItem(ObjectLocalStorage.CURRENT_USER) : null;
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(cUser));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    // getter: currentUserValue
    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    set theUser(value: any) {
        this.currentUserSubject.next(value); // this will make sure to tell every subscriber about the change.
        localStorage.setItem(ObjectLocalStorage.CURRENT_USER, value);
        if (!value) {
            localStorage.removeItem(ObjectLocalStorage.CURRENT_USER);
        }
    }

    login(data: any) {
        return this._http.post<any>(`${environment.apiUrl}/user/login`, data);
    }

    loginOauth(data: any) {
        return this._http
      .post<any>(`${environment.apiUrl}/user/login-oauth`, data, { observe: 'response' })
      .pipe(
        map(res => {
          console.log(res);
          const user = res.body.data;
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(ObjectLocalStorage.CURRENT_USER, JSON.stringify(user));

            // Display welcome toast!
            // setTimeout(() => {
            //   this._toastrService.success(
            //     'Login thành công',
            //     'Welcome, ' + email + '!',
            //     { toastClass: 'toast ngx-toastr', closeButton: true }
            //   );
            // }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        }, (error: HttpErrorResponse) => {
          console.log(error);          
          return error;
        })
      );
        // return this._http.post<any>(`${environment.apiUrl}/user/login-oauth`, data);
    }
}