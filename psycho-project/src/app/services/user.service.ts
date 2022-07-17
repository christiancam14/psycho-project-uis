import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  JsonpClientBackend,
} from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global.service';
import { WebsiteModule } from '../website/website.module';
import { userLogin } from '../models/userLogin';
import { Subject } from 'rxjs';
import { studentRegister } from '../models/studentRegister';
import { psychologistRegister } from '../models/psychologistRegister';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { HttpHeaderResponse } from '@angular/common/http';
import { Auth } from '../models/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'any',
})
export class UserService {
  public url: string = global.url;
  private estadoSesion: Subject<boolean> = new Subject();

  getEstadoSesion() {
    return this.estadoSesion;
  }

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private _http: HttpClient, private tokenService: TokenService, private cookieService: CookieService) {}

  saveUser(formRegister: any) {
    let reg: studentRegister = {
      nickname: formRegister.nickname,
      name: formRegister.name,
      password: formRegister.password,
      email: formRegister.email,
      phone: formRegister.phone,
      city: formRegister.city,
      code_student: formRegister.code_student,
      academic_program: formRegister.academic_program,
      semester: formRegister.semester,
    };
    return this._http.post(this.url + 'students', reg);
  }

  profile(tokenLocal) {
    const data: any = { auth_token: this.cookieService.get('token') };
    return this._http.post<User>(this.url + 'students/read', data).pipe(
      tap((user) => {
        this.user.next(user);
      })
    );
  }

  editProfile(changes){
    let data = {
      phone: changes.phone,
      city: changes.city,
      academic_program: changes.academic_program,
      semester: changes.semester,
	  	auth_token: this.cookieService.get('token')
    }
    console.log(data.auth_token);
    return this._http.post(this.url + 'students/update', data).pipe(tap((response) => console.log(response)))
  }

  profilePsychologist(tokenLocal) {
    const data: any = { auth_token: tokenLocal };
    return this._http.post<User>(this.url + 'psychologists/read', data).pipe(
      tap((user) => {
        this.user.next(user);
      })
    );
  }

  login(password: any, email: string) {
    const data: any = {
      nickname: email,
      password: password,
    };
    return this._http.post<Auth>(this.url + 'students/login', data).pipe(
      tap((res) => {
        JSON.stringify(res);
        if (res['access_token']) {
          const myDate : Date = new Date();
          this.estadoSesion.next(true);
          this.tokenService.saveToken(res.access_token);
          myDate.setHours( myDate.getHours() + 1 );
          this.cookieService.set('token', res.access_token, { expires: myDate });
        }
      })
    );
  }

  getAppointmentsStudent(token){
    return this._http.post(this.url + 'appointments/my-appointments-student/', { "auth_token": token  }).pipe(tap((res) => {}));
  }

  cancelAppointmentsPsycho(id){
    let data = {
      appointment_id: id,
	    auth_token: this.cookieService.get('token-psycho')
    }
    return this._http.post(this.url + 'appointments/cancel-appointment', data).pipe(tap((res) => {}));
  }

  /* Servicios del administrador */

  /* Registro de psicologos */
  savePsychologist(formRegister: any) {
    let reg: psychologistRegister = {
      nickname: formRegister.nickname,
      name: formRegister.name,
      password: formRegister.password,
      email: formRegister.email,
      phone: formRegister.phone,
      city: formRegister.city,
      code_psychology: formRegister.code_psychology,
      office: "Lp 204",
      active: formRegister.active,
      rating_average: 5,
      // appointments_number: formRegister.appointments_number,
      appointments_number: 0,
      auth_token: this.cookieService.get('token-admin')
    };

    console.log(reg);
    return this._http.post(this.url + 'psychologists', reg).pipe(tap(( res => console.log(res))));
  }

  disablePsychologist(id){
    let data = {
      id: id,
	    auth_token:  this.cookieService.get('token-admin')
    }
    
    return this._http.post(this.url + 'psychologists/disable/', data);

  }

  
  getPsychologist(){
    return this._http.post(this.url + 'psychologists/all/', { "auth_token": this.cookieService.get('token')}
    );
  }

  getPsychologistFree(){
    return this._http.get(this.url + 'psychologists/allfree/'
    );
  }

  setAppointment(form){
    let data = {
      psychologist_id : form.psychologist_id,
      date_appointment: form.date_appointment,
      auth_token: this.cookieService.get('token')
    }
    return this._http.post<any>(this.url + 'appointments/create-appointment', data).pipe(
      tap((res) => {
        JSON.stringify(res);
        this.tokenService.saveToken(res.access_token);
      })
    );
  }

  getAppointmentsPsycho(token){
    return this._http.post(this.url + 'appointments/my-appointments-psycho/', { "auth_token": token  }).pipe(tap((res) => {}));
  }
    
  



 /* Servicios del administrador */
 loginAdmin(password: string, email: string){
  const data: any = {
    "nickname": email,
    "password": password
  }
  return this._http.post<Auth>(this.url + 'superusers/login', data).pipe(tap(res => {
    JSON.stringify(res);
    this.tokenService.saveToken(res.access_token);
    const myDate : Date = new Date();
    this.tokenService.saveToken(res.access_token);
    myDate.setHours( myDate.getHours() + 1 );
    this.cookieService.set('token-admin', res.access_token, { expires: myDate });
  }));
}

loginPsycho(password: any, nickname: string){
  const data: any = {
    "nickname": nickname,
    "password": password
  }
  return this._http.post<any>(this.url + 'psychologists/login', data).pipe(tap(res => {
    JSON.stringify(res);
    const myDate : Date = new Date();
    this.tokenService.saveToken(res.access_token);
    myDate.setHours( myDate.getHours() + 1 );
    this.cookieService.set('token-psycho', res.access_token, { expires: myDate });
  }));
}

}
