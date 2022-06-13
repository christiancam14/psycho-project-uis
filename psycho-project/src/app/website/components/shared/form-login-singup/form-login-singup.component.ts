import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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

  public userRegister: User;
  public status!: string;
  public userForm: NgForm;

  constructor(
    http: HttpClient,
    private _userService: UserService
  ) {
    this.userRegister = new User(0,'',2,'','');
  }

  ngOnInit(): void {
  }
  
  onSubmit(form: any){

    this.userRegister = {
      name: form.value.name,
      // code: form.value.code,
      email: form.value.email,
      password: form.value.password,
    };

    this._userService.saveUser(this.userRegister).subscribe(response => {
      console.log(response);
    });
  }


}
