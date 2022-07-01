import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Password } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { debounce, fromEventPattern } from 'rxjs';
import { userLogin } from 'src/app/models/userLogin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // document.getElementById("btn_iniciar_sesion").setAttribute("disabled", "");
  loginEstudiante: FormGroup;
  userForm: userLogin;

  constructor(
    http: HttpClient,
    private _userService: UserService,
    private fb: FormBuilder
  ) {
  }
  
  
  ngOnInit(): void {
    this.loginEstudiante = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]]
    });

    this.loginEstudiante.valueChanges.subscribe(formulario => {
      // Validamos campo a campo
      
      for (const input in this.loginEstudiante.controls) {
        // console.log(this.loginEstudiante.controls[input]);
        if(this.loginEstudiante.controls[input].touched && !this.loginEstudiante.controls[input].valid ){
          // console.log(input + " Fue tocado");
        }
      }

      // validamos si los campos están completos
      if(this.loginEstudiante.valid){
        // Está correcto el formulario y los términos fueron aceptados
        document.getElementById("btn_iniciar_sesion").removeAttribute("disabled");
      }else{
        // Está incorrecto el formulario
        document.getElementById("btn_iniciar_sesion").setAttribute("disabled", "");

      }
      
    });

  }

  onSubmit(form: any){
    this.userForm = {
      usuario: form.value.usuario,
      password: form.value.password
    }

    this._userService.login(this.userForm).subscribe(response => {
      let token = response["access_token"];
      localStorage.setItem("jwt_token", token);
    });
    
  }

}
