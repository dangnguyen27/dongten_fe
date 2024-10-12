import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { environment } from "src/environments/environment";
import { AuthenService } from "./authen.service";

@Injectable({ providedIn: 'root' })
export class SocketService {

    public notify$: BehaviorSubject<any> = new BehaviorSubject(null);
    public comment$: BehaviorSubject<any> = new BehaviorSubject(null);

    socket: any

    constructor(
        private readonly authenService: AuthenService
    ) {
        if (this.authenService.currentUserValue && this.authenService.currentUserValue.token) {
            
        }
    }

    public start(token: string) {
        this.socket = io(environment.socketUrl, {
            extraHeaders: {
                authorization: `Bearer ${token}` 
            }
        });
    }

    public getNewNotify = () => {
        this.socket.on('notifications', (message: any) => {
            this.notify$.next(message);
        });

        return this.notify$.asObservable();
    };

    public getNewComment = () => {
        this.socket.on('comment', (message: any) => {
            this.comment$.next(message);
        });
        return this.comment$.asObservable();
    }

}