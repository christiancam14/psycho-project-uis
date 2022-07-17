import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-psychologist-header',
  templateUrl: './psychologist-header.component.html',
  styleUrls: ['./psychologist-header.component.css']
})
export class PsychologistHeaderComponent implements OnInit {

  title = 'psycho-project';
  activeMenu = false;
  private storage = window.localStorage;
  public isMenuCollapsed = true
  sesionIniciada: boolean = false;
  cookie: boolean = false;

  constructor(
    private _userService: UserService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  userLogin: User | null  = null;

  ngOnInit(): void {
    this.cookie = this.cookieService.check('token-psycho');
  
    if(!this.cookie){
      this.router.navigate(['/psy-psychology/login']);
    }
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
