import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsychoGuardGuard implements CanActivate {
  constructor(private coockieService: CookieService, private router: Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.coockieService.check('token-psycho');
      if(cookie){
        this.router.navigate(['/', 'psy-psychology/login']);
        return false;
      }else{
        return true;
      }
  }
  
}
