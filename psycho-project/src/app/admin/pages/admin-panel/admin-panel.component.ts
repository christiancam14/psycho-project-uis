import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Form, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  mostrarNotificacion: boolean = false;
  registroEstudiante: FormGroup;
  userRegister: User;
  passwordInvalid: boolean;
  msgs1: Message[];
  constructor(
    _http: HttpClient,
    private _userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.passwordInvalid = false;

    this.registroEstudiante = this.fb.group({
      nickname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      office: ['', [Validators.required]],
      code_psychology: ['', [Validators.required]],
      appointments_number:  ['', ],
      active: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
      terminos: ['', [Validators.required]]
    });
    this.reiniciarFormulario();

    this.registroEstudiante.valueChanges.subscribe(formulario => {
      
      if(formulario.password != formulario.passwordConfirm && this.registroEstudiante.controls["passwordConfirm"].touched){
        this.passwordInvalid = true;
      } else if(!this.registroEstudiante.valid || formulario.password != formulario.passwordConfirm){
        this.passwordInvalid = false;
        document.getElementById("btn_registrar").setAttribute("disabled", "");
      } else if(this.registroEstudiante.valid && formulario.password == formulario.passwordConfirm ){
        document.getElementById("btn_registrar").removeAttribute("disabled");
        this.passwordInvalid = false;
      }
      if(this.passwordInvalid){
        document.getElementById("btn_registrar").setAttribute("disabled", "");
      }

      if(formulario.terminos == false){
        document.getElementById("btn_registrar").setAttribute("disabled", "");
      }
      
      // Validamos que el input haya sido tocado y validado
      for (const input in formulario) {
        if(input == "passwordConfirm"){
          if(this.registroEstudiante.controls[input].touched && !this.registroEstudiante.controls[input].valid && this.registroEstudiante.value.password != this.registroEstudiante.value.passwordConfirm){
            let valInput = document.getElementsByName(input);
            valInput[0]?.classList.add("is-invalid");
          }else if(this.registroEstudiante.controls[input].valid && this.registroEstudiante.value.password == this.registroEstudiante.value.passwordConfirm){
            let valInput = document.getElementsByName(input);
            valInput[0]?.classList.remove("is-invalid");
            valInput[0]?.classList.add("is-valid");
          }
        }else{
          if(this.registroEstudiante.controls[input].touched && !this.registroEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0]?.classList.add("is-invalid");
          }else if(this.registroEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0]?.classList.remove("is-invalid");
            valInput[0]?.classList.add("is-valid");
          }
        }
      }
    });

  }

  
  onSubmit(form: any){

    this.userRegister = {
      nickname: form.value.nickname,
      name: form.value.name,
      password: form.value.password,
      email: form.value.email,
      phone: String(form.value.phone),
      city: form.value.city,
      office: form.value.office,
      rating_average: 5,
      appointments_number: parseInt(form.value.appointments_number),
      code_psychology: String(form.value.code_psychology)
    };
    

    this._userService.savePsychologist(this.userRegister).subscribe(response => {
      console.log(response["message"]);
      if(response["message"] == "Psychologist code already exists"){
       // Ya existe el usuario
       this.msgs1 = [{severity:'error', summary:'Código de psicólogo invalido:', detail:'Este Código de psicólogo ya se encuentra registrado.'}];
       this.mostrarNotificacion = true;
       console.log('Psicologo existe');
      }else if(response["message"] == "Psychologist created"){
       this.msgs1 = [{severity:'success', summary:'Psicólogo registrado.', detail:'El  psicólogo fue creado con éxito'}];
       this.mostrarNotificacion = true;
       console.log('Psicologo creado');
       this.reiniciarFormulario();
      }else if(response["message"] == "Psychologist email already exists"){
       this.msgs1 = [{severity:'error', summary:'Email inválido:', detail:'Este email ya se encuentra registrado.'}];
       this.mostrarNotificacion = true;
       console.log('email de psicologo ya registrado');
      }else if(response["message"] == "psychology code already exists"){
       this.msgs1 = [{severity:'error', summary:'Código inválido:', detail:'El código de psicólogo ya se encuentra registrado.'}];
       this.mostrarNotificacion = true;
       console.log('Codigo de psicologo ya registrado');
      }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        // this.router.navigate(['/psy-admin/']);
      }
    });

}

reiniciarFormulario(){
  this.registroEstudiante.reset();
  for (const input in this.registroEstudiante.controls) {
    let valInput = document.getElementsByName(input);
    valInput[0]?.classList.remove("is-valid");
    
  }
}

cerrarSesionAdmin(){
  this.cookieService.delete('token-admin');
  this.router.navigate(['/psy-admin/']);
  setTimeout(() => window.location.reload(), 1500);
}

}
