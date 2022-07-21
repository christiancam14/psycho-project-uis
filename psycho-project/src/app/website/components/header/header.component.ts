import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  title = 'psycho-project';
  activeMenu = false;
  private storage = window.localStorage;
  public isMenuCollapsed = true
  sesionIniciada: boolean = false;
  cookie: boolean = false;

  constructor(
    private _userService: UserService,
    private cookieService: CookieService
  ){
    this._userService.getEstadoSesion().subscribe(estado => {
      this.sesionIniciada = estado;
    })
  }

  userLogin: User | null  = null;

  ngOnInit(): void {
    this._userService.user$.subscribe(user => {
      this.userLogin = user;
    });

    this.cookie = this.cookieService.check('token');

  }

  cambiaPagina(){
    
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
