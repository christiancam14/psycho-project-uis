import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Password } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { debounce, fromEventPattern } from 'rxjs';
import { Message } from 'primeng/api';
import { userLogin } from 'src/app/models/userLogin';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  storage = window.localStorage;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;
  perfil: any;
  
  constructor(
    private _userService: UserService,
    private fb : FormBuilder,
    private tokenService: TokenService,
    private router: Router,
    http: HttpClient,
  ) { }
  
  ngOnInit(): void {
    this.setForm();
    this.recargarPagina();
  }

  setForm(){
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  recargarPagina(){
    if (location.search.indexOf("reload=true") != -1) {
      // refresh the page, but no "reload" this time
      location.href = "www.example.com/incidents";
    }
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    if(this.loginForm.valid){
      this._userService.login(this.f['password'].value, this.f['user'].value).subscribe(response => {
        if(response["message"] == "Student not found, verify credentials"){
          this.msgs1 = [{severity:'error', summary:'Usuario inválido:', detail:'Verifica tu información'}];
          this.mostrarNotificacion = true;
        }else if(response["message"] == "Password incorrect"){
          this.msgs1 = [{severity:'error', summary:'Contraseña incorrecta:', detail:'Verifica tu contraseña'}];
          this.mostrarNotificacion = true;
        }else if(response["access_token"]){
          this.msgs1 = [{severity:'success', summary:'Información correcta:', detail:'Sesión iniciada'}];
          this.mostrarNotificacion = true;
          this.router.navigate(['/profile']);
          window.location.reload();
          
        }else{
          this.msgs1 = [{severity:'error', summary:'Lo sentimos hubo un error:', detail:'Vuelve a intentarlo'}];
          this.mostrarNotificacion = true;
        }
      });
    }
  }

  getProfile(){
    if(this.storage["token"]){
      // Ya está logueado
      this._userService.profile(this.storage["token"]).subscribe(user => {
        if(user["message"] == "Failed UnauthorizedException: Unauthorized"){
          this.router.navigate(['/login']);
        }
        this.perfil = user;
      });
    }else{
      // No está logueado
      this.router.navigate(['/login']);
    }
  }

  removeToken(){
    this.tokenService.removeToken();
  }

}
