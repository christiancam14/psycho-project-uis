import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global.service';
import { WebsiteModule } from '../website/website.module';
import { userLogin } from '../models/userLogin';
import { studentRegister } from '../models/studentRegister';
import { psychologistRegister } from '../models/psychologistRegister'
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
      this.tokenService.saveToken(res.access_token);
    }));
  }

  /*
  profile(){
    return this._http.get<User>(this.url + 'profile').pipe(
      tap(user => {
        this.user.next(user);
      })
    );
  }
  */
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

getAllPsychology() {
  return this._http.get(this.url + 'psychologists/all');
}

 _
}
