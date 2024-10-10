import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenService } from 'src/app/services/authen.service';
import { environment } from 'src/environments/environment';
declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit{
  returnUrl: string = '/forum';
  constructor(
    private authService: SocialAuthService,
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
    private readonly dtAuthenService: AuthenService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }
  ngAfterViewInit(): void {
    // this.addJsToElement("/assets/js/gsi.js");
  }
  ngOnInit(): void {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/forum';

    google.accounts.id.initialize({
      client_id: environment.google_oauth_client_id,
      callback: (res: any) => {
        //call api login
        const data = {
          type: 'google',
          token: res.credential
        }
        this.dtAuthenService.loginOauth(data).pipe(first())
        .subscribe(
          data => {
            console.log('===data===');
            console.log(data);
            this._router.navigate([this.returnUrl]);
          },
          error => {
            console.log(error);
            // this.error = error;
            // this.loading = false;
          }
        );
        console.log(res);
      }
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {      
      size: 'large',
      shape: 'rectangle'
    })
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      console.log(accessToken);
    });
  }

  onLoginGoogle(data: any) {
    console.log(data);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this._renderer2.appendChild(document.body, script);
    return script;
  }
}
