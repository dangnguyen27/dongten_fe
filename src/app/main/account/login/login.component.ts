import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit{
  constructor(
    private authService: SocialAuthService,
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
  ) { }
  ngAfterViewInit(): void {
    // this.addJsToElement("/assets/js/gsi.js");
    

  }
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: environment.google_oauth_client_id,
      callback: (res: any) => {
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
