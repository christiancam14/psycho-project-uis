import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

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
  
  constructor(
    private _userService: UserService,
  ){
    this._userService.getEstadoSesion().subscribe(estado => {
      this.sesionIniciada = estado;
      console.log("La sesion " + this.sesionIniciada);
    })
  }

  userLogin: User | null  = null;

  ngOnInit(): void {
    this._userService.user$.subscribe(user => {
      this.userLogin = user;
    });
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
