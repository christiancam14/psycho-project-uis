import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { User } from 'src/app/models/user';
import { studentRegister } from 'src/app/models/studentRegister';
import { UserService } from 'src/app/services/user.service';
import { ConditionalExpr } from '@angular/compiler';

imports:[
  FormsModule
]
@Component({
  selector: 'app-form-login-singup',
  templateUrl: './form-login-singup.component.html',
  styleUrls: ['./form-login-singup.component.css'],
  providers: [
    UserService
  ]
})
export class FormLoginSingupComponent implements OnInit {

  userRegister: User;
  status!: string;
  registroEstudiante: FormGroup;
  passwordInvalid: boolean = false;
  mostrarNotificacion: boolean = false;
  msgs1: Message[];

  constructor(
    _http: HttpClient,
    private _userService: UserService,
    private fb: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    
    this.registroEstudiante = this.fb.group({
      nickname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      code_student: ['', [Validators.required]],
      academic_program: ['', [Validators.required]],
      semester: ['', [Validators.required]],
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
            valInput[0].classList.add("is-invalid");
          }else if(this.registroEstudiante.controls[input].valid && this.registroEstudiante.value.password == this.registroEstudiante.value.passwordConfirm){
            let valInput = document.getElementsByName(input);
            valInput[0].classList.remove("is-invalid");
            valInput[0].classList.add("is-valid");
          }
        }else{
          if(this.registroEstudiante.controls[input].touched && !this.registroEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0].classList.add("is-invalid");
          }else if(this.registroEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0].classList.remove("is-invalid");
            valInput[0].classList.add("is-valid");
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
      code_student: String(form.value.code_student),
      academic_program: parseInt(form.value.academic_program),
      semester: parseInt(form.value.semester)
    };

    this._userService.saveUser(this.userRegister).subscribe(response => {
       console.log(response);
       if(response["message"] == "Student nickname already exists"){
        // Ya existe el usuario
        this.msgs1 = [{severity:'info', summary:'Usuario inválido:', detail:'Este nombre de usuario ya se encuentra registrado.'}];
        this.mostrarNotificacion = true;
       }else if(response["message"] == "Student created"){
        this.msgs1 = [{severity:'success', summary:'Usuario registrado.', detail:'El usuario fue creado con éxito'}];
        this.mostrarNotificacion = true;
        this.reiniciarFormulario();
       }else if(response["message"] == "Student email already exists"){
        this.msgs1 = [{severity:'info', summary:'Email inválido:', detail:'Este email ya se encuentra registrado.'}];
        this.mostrarNotificacion = true;
       }else if(response["message"] == "Student code already exists"){
        this.msgs1 = [{severity:'info', summary:'Código inválido:', detail:'El código de estudiante ya se encuentra registrado.'}];
        this.mostrarNotificacion = true;
       }
     });

  }

  reiniciarFormulario(){
    this.registroEstudiante.reset();
    for (const input in this.registroEstudiante.controls) {
      let valInput = document.getElementsByName(input);
      valInput[0].classList.remove("is-valid");
      
    }
  }

}
