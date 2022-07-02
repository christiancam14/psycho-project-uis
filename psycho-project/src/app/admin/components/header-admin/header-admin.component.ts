import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {

  title = 'psycho-project';
  activeMenu = false;
  public isMenuCollapsed = true

  constructor() { }
  
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
