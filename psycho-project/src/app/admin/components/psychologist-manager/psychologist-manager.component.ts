import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-psychologist-manager',
  templateUrl: './psychologist-manager.component.html',
  styleUrls: ['./psychologist-manager.component.css']
})
export class PsychologistManagerComponent implements OnInit {

  public psychologyList: any;

  constructor(private _UserService :UserService

  ) { }

  ngOnInit(): void {
  }

  cargarTodosPsicologos() {
    this._UserService.getAllPsychology()
    .subscribe(Response =>{this.psychologyList = Response; console.log(this.psychologyList) })
    
  };

}
