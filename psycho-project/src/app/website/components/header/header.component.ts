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
  public isMenuCollapsed = true

  constructor(
    private userService: UserService,
  ){

  }

  userLogin: User | null  = null;

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.userLogin = user;
    });
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
