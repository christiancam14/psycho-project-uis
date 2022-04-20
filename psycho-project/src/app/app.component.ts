import { Component } from '@angular/core';
import { HeaderComponent } from './website/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'psycho-project';
  activeMenu = false;

  constructor(){

  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
    console.log(this.activeMenu);
  }
}
