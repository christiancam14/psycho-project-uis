import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'psycho-project';
  activeMenu = false;
  public isMenuCollapsed = true

  constructor(){

  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
