import { Component, OnInit } from '@angular/core';
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

  constructor(
    private _userService: UserService,
  ) { }

  userLogin: User | null  = null;

  ngOnInit(): void {
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
