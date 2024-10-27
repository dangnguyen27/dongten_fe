import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharePipeModule } from 'src/app/pipes/share-pipe.module';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/helpers/auth.guards';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: AccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,        
    RouterModule.forChild(routes),
    SharePipeModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    NgbNavModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'vi',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.google_oauth_client_id
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ]
})
export class AccountModule { }
