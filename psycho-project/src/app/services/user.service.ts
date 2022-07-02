import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global.service';
import { WebsiteModule } from '../website/website.module';
import { userLogin } from '../models/userLogin';
import { Subject } from 'rxjs';
import { studentRegister } from '../models/studentRegister';
import { psychologistRegister } from '../models/psychologistRegister'
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { HttpHeaderResponse } from '@angular/common/http';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  public url: string = global.url;
  private estadoSesion : Subject<boolean> = new Subject();

  getEstadoSesion(){
    return this.estadoSesion;
  }

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private _http: HttpClient,
    private tokenService: TokenService
  ) {
    
  }

  

  saveUser(formRegister: any){
    let reg: studentRegister = {
      "nickname": formRegister.nickname,
      "name": formRegister.name,
      "password": formRegister.password,
      "email": formRegister.email,
      "phone": formRegister.phone,
      "city": formRegister.city,
      "code_student": formRegister.code_student,
      "academic_program": formRegister.academic_program,
      "semester": formRegister.semester
  }
    return this._http.post(this.url + 'students', reg);
  }

  profile(tokenLocal){
    const data: any = { "auth_token": tokenLocal }
    return this._http.post<User>(this.url + 'students/details', data).pipe(
      tap(user => {
        this.user.next(user);
      })
    );
  }
  
  profilePsychologist(tokenLocal){
    const data: any = { "auth_token": tokenLocal }
    return this._http.post<User>(this.url + 'psychologists/details', data).pipe(
      tap(user => {
        this.user.next(user);
      })
    );
  }

  login(password: any, email: string){
    const data: any = {
      "nickname": email,
      "password": password
    }
    return this._http.post<Auth>(this.url + 'students/login', data).pipe(tap(res => {
      JSON.stringify(res);
      if(res["access_token"]){
        this.estadoSesion.next(true);
        this.tokenService.saveToken(res.access_token);
      }
    }));
  }



 /* Servicios del administrador */
 loginAdmin(password: any, email: string){
  const data: any = {
    "nickname": email,
    "password": password
  }
  return this._http.post<Auth>(this.url + 'superusers/login', data).pipe(tap(res => {
    JSON.stringify(res);
    this.tokenService.saveToken(res.access_token);
  }));
}

/* Registro de psicologos */
savePsychologist(formRegister: any){
  let reg: psychologistRegister = {
    "nickname": formRegister.nickname,
    "name": formRegister.name,
    "password": formRegister.password,
    "email": formRegister.email,
    "phone": formRegister.phone,
    "city": formRegister.city,
    "code_psychology": formRegister.code_psychology,
    "active": formRegister.active,
    "rating_average": formRegister.rating_average,
    "appointments_number": formRegister.appointments_number,
    "auth_token": localStorage.getItem('token')
}
  return this._http.post(this.url + 'psychologists', reg);
}

 /* 
       "nickname": "MJ2",
    "name": "Jumi Delgado",
    "password": "hola mundo",
    "email": "Jumialone11@gmail.com",
    "phone": "3006754477",
    "city": "Villanueva",
    "code_psychology": "1237",
    "active": true,
    "rating_average": 0,
        "appointments_number": 4,
        "auth_token"
    */
}
function loginAdmin(password: any, any: any, email: any, string: any) {
  throw new Error('Function not implemented.');
}

function password(password: any, any: any, email: any, string: any) {
  throw new Error('Function not implemented.');
}

function email(password: (password: any, any: any, email: any, string: any) => void, any: any, email: any, string: any) {
  throw new Error('Function not implemented.');
}

