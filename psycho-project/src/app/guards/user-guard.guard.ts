import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(
    private router:Router,
    private tokenService: TokenService,
    private userService: UserService,
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.tokenService.getToken();
   /*  if(!token){
      this.router.navigate(['/login']);
      return false;
    }
    return true; */

    return this.userService.user$.pipe(
      map(user => {
        if(!user){
          this.router.navigate(['/home']);
          return false;
        }else{
          return true;
        }
      })
    )
  }
  
}
