import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global.service';
import { WebsiteModule } from '../website/website.module';
import { userLogin } from '../models/userLogin';
import { studentRegister } from '../models/studentRegister';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  public url: string = global.url;
  constructor(
    private _http: HttpClient
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

  login(formLogin : userLogin){
    return this._http.post(this.url + 'students/login', {"nickname": formLogin.usuario,
    "password": formLogin.password});

  }
}