import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userRegister: User;
  status!: string;
  actualizarEstudiante: FormGroup;
  passwordInvalid: boolean = false;
  mostrarNotificacion: boolean = false;
  msgs1: Message[];


  constructor(
    _http: HttpClient,
    private _userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.actualizarEstudiante = this.fb.group({
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      academic_program: ['', [Validators.required]],
      semester: ['', [Validators.required]]
    });

    this.actualizarEstudiante.valueChanges.subscribe(formulario => {
      
      if(!this.actualizarEstudiante.valid){
        this.passwordInvalid = false;
        document.getElementById("btn_registrar").setAttribute("disabled", "");
      } else if(this.actualizarEstudiante.valid){
        document.getElementById("btn_registrar").removeAttribute("disabled");
        this.passwordInvalid = false;
      }
      
      // Validamos que el input haya sido tocado y validado
      for (const input in formulario) {
        if(input == "passwordConfirm"){
          if(this.actualizarEstudiante.controls[input].touched && !this.actualizarEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0].classList.add("is-invalid");
          }
        }else{
          if(this.actualizarEstudiante.controls[input].touched && !this.actualizarEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0].classList.add("is-invalid");
          }else if(this.actualizarEstudiante.controls[input].valid){
            let valInput = document.getElementsByName(input);
            valInput[0].classList.remove("is-invalid");
            valInput[0].classList.add("is-valid");
          }
        }
      }
    });
  }

  onSubmit(form: any){

    let userUpdate = {
      phone: String(form.value.phone),
      city: form.value.city,
      academic_program: parseInt(form.value.academic_program),
      semester: parseInt(form.value.semester)
    };

    this._userService.editProfile(userUpdate).subscribe(response => {
       console.log(response);
       if(response["message"] == "Student nickname already exists"){
        // Ya existe el usuario
        this.msgs1 = [{severity:'info', summary:'Usuario inválido:', detail:'Este nombre de usuario ya se encuentra registrado.'}];
        this.mostrarNotificacion = true;
       }else if(response["message"] == "Student updated"){
        this.msgs1 = [{severity:'success', summary:'Perfil actualizado.', detail:'El usuario fue actualizado con éxito'}];
        this.mostrarNotificacion = true;
        // this.reiniciarFormulario();
       }else if(response["message"] == "Student email already exists"){
        this.msgs1 = [{severity:'info', summary:'Email inválido:', detail:'Este email ya se encuentra registrado.'}];
        this.mostrarNotificacion = true;
       }else if(response["message"] == "Student code already exists"){
        this.msgs1 = [{severity:'info', summary:'Código inválido:', detail:'El código de estudiante ya se encuentra registrado.'}];
        this.mostrarNotificacion = true;
       }
     });

  }


}
