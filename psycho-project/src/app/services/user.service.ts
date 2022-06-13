import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global.service';
import { WebsiteModule } from '../website/website.module';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  public url: string = global.url;
  constructor(
    private _http: HttpClient
  ) {
  }

  saveUser(user: any){
    return this._http.post(this.url + 'register', user).pipe(map(data => {
      JSON.stringify(data);
    }));
  }

  login(password: any, email: string){
    return this._http.get(this.url + 'login').pipe(map(data => {
      JSON.stringify(data);
    }));
  }
}
