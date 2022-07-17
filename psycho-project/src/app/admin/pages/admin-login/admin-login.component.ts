import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Password } from 'primeng/password';
import { debounce, fromEventPattern } from 'rxjs';
import { userLogin } from 'src/app/models/userLogin';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  storage = window.localStorage;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;

     

  constructor(
    private userService: UserService,
    private fb : FormBuilder,
    private tokenService: TokenService,
    private router: Router,
    http: HttpClient,
  ) { }
  
  ngOnInit(): void {
    this.setForm();
    /* this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'},
       {severity:'info', summary:'Info', detail:'Message Content'},
      {severity:'warn', summary:'Warning', detail:'Message Content'},
       {severity:'error', summary:'Error', detail:'Message Content'}
   ]; */
  }

  setForm(){
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.userService.loginAdmin(this.f['password'].value, this.f['user'].value).subscribe(response => {
        if(response["message"] == "Superuser not found, verify credentials"){
          // Recargamos las preguntas
          this.msgs1 = [{severity:'error', summary:'Verifica tus datos', detail:'Usuario no encontrado'}];
          this.mostrarNotificacion = true;
        }else if(response["message"] == "Password incorrect"){
          // Enviamos a iniciar sesión
          this.msgs1 = [{severity:'error', summary:'Contraseña incorrecta', detail:'Por favor, verifica tu contraseña'}];
          this.mostrarNotificacion = true;
        }else if(response["access_token"] ){
          this.router.navigate(['/psy-admin/psy-panel']);
          setTimeout(() =>window.location.reload() , 100);
        }
      });
    }
  }

  removeToken(){
    this.tokenService.removeToken();
  }
}
