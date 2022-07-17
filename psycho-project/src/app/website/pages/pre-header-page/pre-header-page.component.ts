import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pre-header-page',
  templateUrl: './pre-header-page.component.html',
  styleUrls: ['./pre-header-page.component.css']
})
export class PreHeaderPageComponent implements OnInit {

  psychoList: any;

  constructor(
    private _userService: UserService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.getPsychoList();
  }

  getPsychoList(){
    this._userService.getPsychologistFree().subscribe(listado => {
      console.log(listado);
      this.psychoList = listado;
    })
  }

}
