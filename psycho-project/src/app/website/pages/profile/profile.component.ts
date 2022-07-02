import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { global } from 'src/app/services/global.service';
import { studentRegister } from 'src/app/models/studentRegister';
import { Router } from '@angular/router';

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
    ) { 
      this.getProfile();

    }

  ngOnInit(): void {
    
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


}
