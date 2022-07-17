import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private storage = window.localStorage;
  public perfil: any;
  constructor(
    private _userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    if(this.cookieService.check('token-psycho')){
      this._userService.profilePsychologist(this.cookieService.get('token-psycho')).subscribe(user => {
        this.perfil = user;
      });
    } 
  }

  cerrarSesion(){
    this.cookieService.delete('token-psycho');
    this.storage.clear();
    this.router.navigate(['/psy-psychology/login']);
    setTimeout(() =>window.location.reload() , 100);
    
    // window.location.reload();
  }

}
