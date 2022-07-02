import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Password } from 'primeng/password';
import { debounce, fromEventPattern } from 'rxjs';
import { userLogin } from 'src/app/models/userLogin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
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

  }

}
