import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs';
import { LoadPermissionsService } from '../service/load-permissions.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loadPermissionsService: LoadPermissionsService,
    private ngxPermissionsService: NgxPermissionsService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loadPermissionsService.loadPermissions().then((data) => {
      this.ngxPermissionsService.loadPermissions(data)
      return true;
    });
  }

}
