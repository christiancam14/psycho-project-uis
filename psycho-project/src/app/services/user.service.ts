import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global.service';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  public url: string = global.url;

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private _http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  saveUser(user: any){
    return this._http.post(this.url + 'register', user).pipe(map(data => {
      JSON.stringify(data);
    }));
  }

  login(password: any, email: string){
    const data: any = {
      "nickname": email,
      "password": password
    }
    return this._http.post<Auth>(this.url + 'students/login', data).pipe(tap(res => {
      JSON.stringify(res);
      this.tokenService.saveToken(res.access_token);
    }));
  }

  profile(){
    return this._http.get<User>(this.url + 'profile').pipe(
      tap(user => {
        this.user.next(user);
      })
    );
  }
}
