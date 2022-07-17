import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { global } from './global.service';
import { TokenService } from './token.service';
import { CookieService } from 'ngx-cookie-service';
import { Workshop } from '../models/workshop';

@Injectable({
  providedIn: 'root'
})
export class WorshopsService {

  private url: string = global.url;
  constructor(private _http: HttpClient,
    private tokenService: TokenService,
    private cookieService: CookieService
    ) {
    
  }

  createWorkshop(newWorkshop){
    let curso = {
      title: newWorkshop.title , 
      image: newWorkshop.image, 
      body: newWorkshop.body,
      auth_token: this.cookieService.get('token-psycho')
    };
    return this._http.post(this.url + 'workshops/', curso);
  }
  
  deleteWorkshop(idWorkshop){
    let data = {
      workshop_id: idWorkshop,
	    auth_token: this.cookieService.get('token-psycho')
    }
    return this._http.post(this.url + 'workshops/delete/', data);
  }

}
