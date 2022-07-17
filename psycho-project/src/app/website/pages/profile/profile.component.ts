import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { global } from 'src/app/services/global.service';
import { studentRegister } from 'src/app/models/studentRegister';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private url: string = global.url;
  private storage = window.localStorage;
  public perfil: any;

  constructor(
    private _userService: UserService,
    private router: Router,
    private cookieService: CookieService
    ) { 
      this.getProfile();
    }

  ngOnInit(): void {
    setTimeout(this.recargarPagina,1000)
  }

  getProfile(){
    if(this.storage["token"]){
      // Ya está logueado
      this._userService.profile(this.storage["token"]).subscribe(user => {
        if(user["message"] == "Failed UnauthorizedException: Unauthorized"){
          this.router.navigate(['/login']);
        }
        this.perfil = user;
      });
    }else{
      // No está logueado
      this.router.navigate(['/login']);
    }
  }

  recargarPagina(){
    if (location.search.indexOf("reload=true") != -1) {
      // refresh the page, but no "reload" this time
      location.href = "www.example.com/incidents";
    }
  }

  cerrarSesion(){
    this.cookieService.delete('token');
    this.storage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
    
  }


}
