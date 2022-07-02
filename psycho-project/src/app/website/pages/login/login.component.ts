import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Password } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { debounce, fromEventPattern } from 'rxjs';
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
  formV: boolean = false;
  termsCheck: boolean;
  storage = window.localStorage;

  constructor(
    private userService: UserService,
    private fb : FormBuilder,
    private tokenService: TokenService,
    private router: Router,
    http: HttpClient,
  ) { }
  
  ngOnInit(): void {
    this.setForm();
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
      this.userService.login(this.f['password'].value, this.f['user'].value).subscribe(() => {
        //this.router.navigate(['/']);
      });
    }
  }

  removeToken(){
    this.tokenService.removeToken();
  }

}
