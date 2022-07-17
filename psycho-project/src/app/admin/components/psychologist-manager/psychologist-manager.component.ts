import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-psychologist-manager',
  templateUrl: './psychologist-manager.component.html',
  styleUrls: ['./psychologist-manager.component.css']
})
export class PsychologistManagerComponent implements OnInit {

  psychoList: any;

  constructor(
    private _userService: UserService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.getPsychoList();
  }

  getPsychoList(){
    this._userService.getPsychologistFree().subscribe(listado => {
      console.log(listado);
      this.psychoList = listado;
    })
  }

  desactivarPsicologo(event: Event, id, name){
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Estás seguro de eliminar esta cita?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this._userService.disablePsychologist(id).subscribe(response =>
          {
            console.log(response);
            if(response["message"] == "Psychologist disabled"){
              this.messageService.add({
                severity: "success",
                summary: "Usuario desactivado",
                detail: "Psicólogo(a) " + name + " ha sido desactivado"
              });
              setTimeout(() => window.location.reload(), 1500)
            } 
          }
          
        )},
      reject: () => {
        this.messageService.add({
          severity: "info",
          summary: "Usuario activo",
          detail: "El psicólogo no será desactivado"
        });
      }
    });
  }
  



  
}
