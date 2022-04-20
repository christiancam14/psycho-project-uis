import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'psycho-project';
  activeMenu = false;

  constructor(){

  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
    console.log(this.activeMenu);
  }

}
