import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenService } from '../services/authen.service';
import { CmsService } from '../services/cms.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(
    private _router: Router,
    private _authenticationService: AuthenService,
    private cmmsService: CmsService
  ) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;

    if (currentUser) {
      this.cmmsService.getNotifications().subscribe(res => {
        console.log(res)
      }, error => {
        console.log("err auth", error)
        if(error.status == 401) {
          this._router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        }
      })

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
