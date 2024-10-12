import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './helpers/jwt.interceptor';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./main/podcast/podcast.module').then(m => m.PodcastModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./main/forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./main/account/account.module').then(m => m.AccountModule)
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {
    }),
    LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
