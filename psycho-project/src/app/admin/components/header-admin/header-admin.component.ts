import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {

  title = 'psycho-project';
  activeMenu = false;
  public isMenuCollapsed = true;
  cookie: boolean = false;
  sesionActive = false;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }
  
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  ngOnInit(): void {
    this.cookie = this.cookieService.check('token-admin');
  
    if(!this.cookie){
      this.router.navigate(['/psy-admin/login']);
    }else{
      this.sesionActive = true;
    }
  }
}
