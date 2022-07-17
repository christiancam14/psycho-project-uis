import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Message, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-psycho-login',
  templateUrl: './psycho-login.component.html',
  styleUrls: ['./psycho-login.component.css']
})
export class PsychoLoginComponent implements OnInit {

  loginForm: FormGroup;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;
  storage = window.localStorage;

  constructor(
    private userService: UserService,
    private fb : FormBuilder,
    private tokenService: TokenService,
    private router: Router,
    http: HttpClient,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.setForm();
  }

  setForm(){
    this.loginForm = this.fb.group({
      nickname: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(Form){
    console.log(Form.controls);
    console.log(Form.value.nickname);
    const data = {
      password: Form.value.password,
      nickname: Form.value.nickname
      }
    if(this.loginForm.valid){
      this.userService.loginPsycho(data.password, data.nickname).subscribe(response => {
        console.log(response.message)
        if(response.message == "Psychologist not found, verify credentials"){
          // Recargamos las preguntas
          this.msgs1 = [{severity:'error', summary:'Verifica tus datos', detail:'Piscologo no encontrado'}];
          this.mostrarNotificacion = true;
        }else if(response.message == "Password incorrect"){
          // Enviamos a iniciar sesión
          this.msgs1 = [{severity:'error', summary:'Contraseña incorrecta', detail:'Por favor, verifica tu contraseña'}];
          this.mostrarNotificacion = true;
        }else if(response["access_token"] ){
          this.router.navigate(['/psy-psychology/appointments']);
          setTimeout(() =>window.location.reload() , 100);
          // window.location.reload();
          // alert();
        }
      });
    }
  }

}
