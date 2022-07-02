import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './website/components/header/header.component';
import { UserService } from './services/user.service'
import { TokenService } from './services/token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ){
  }

  ngOnInit(){
    const token = this.tokenService.getToken();
    if(token){
      // this.userService.profile().toPromise();
    }
  }
}
