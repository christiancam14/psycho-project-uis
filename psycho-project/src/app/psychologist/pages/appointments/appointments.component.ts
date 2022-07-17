import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
// import {jsPDF} from 'jspdf';
// import autoTable from 'jspdf-autotable';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  citasPsycho: any;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;
  sinCitas: boolean = false;
  @ViewChild('dt') table: Table;
  
  constructor(
    private _userService: UserService,
    private cookieService: CookieService,
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(){
    this._userService.getAppointmentsPsycho(this.cookieService.get('token-psycho')).subscribe(citas => {
      
      if(citas["message"] == "No appointments found for this Psychologist"){
        this.sinCitas = true;
      }else{
        this.citasPsycho = citas;
      }
    });
  }

  @ViewChild('tablas', {static: false}) el!: ElementRef;
  
  descargarTabla(){
    const tabla = document.getElementById('citasPsycho');
    const doc = new jsPDF('l', 'pt', 'b5');
    doc.html(this.el.nativeElement, {
      callback: (doc) => {
        doc.save("misCitas.pdf");
      }
    })
  }

  
 validarCancelacion(event: Event, id){
  this.confirmationService.confirm({
    target: event.target,
    message: "¿Estás seguro de eliminar esta cita?",
    icon: "pi pi-exclamation-triangle",
    accept: () => {

      this._userService.cancelAppointmentsPsycho(id).subscribe(response => {
        console.log(response["message"]);
        if(response["message"] == "Appointment canceled"){
          // Recargamos las preguntas
          this.msgs1 = [{severity:'success', summary:'Cita cancelada', detail:'Esperamos que todo esté bien'}];
          this.mostrarNotificacion = true;
          setTimeout(() => {window.location.reload();}, 1500);
        }else if(response["message"] == "Appointment not found"){
          this.msgs1 = [{severity:'info', summary:'La cita no fue encontrada 🤔', detail:'Esa cita no concuerda con ninguna de nuestras citas'}];
          this.mostrarNotificacion = true;
        }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
          this.msgs1 = [{severity:'info', summary:'No tienes permiso', detail:'Si quieres cancelar esta cita debes iniciar sesión dede la cuenta del psicólogo'}];
          this.mostrarNotificacion = true;
        }else if(response["message"] == "Appointment already finished"){
          this.msgs1 = [{severity:'info', summary:'La cita está vencida', detail:'La fecha de la cita ya pasó... Intenta con otra'}];
          this.mostrarNotificacion = true;
        }else if(response["message"] == "Appointment already canceled"){
          this.msgs1 = [{severity:'info', summary:'La cita ya fue cancelada', detail:'Ya cancelaste esta cita'}];
          this.mostrarNotificacion = true;
        }
      })
      },
    reject: () => {
      this.messageService.add({
        severity: "error",
        summary: "Hoy no",
        detail: "La cita no será eliminada"
      });
    }
  });
}
 




  cancelarCita(id){
    console.log(id);
    this._userService.cancelAppointmentsPsycho(id).subscribe(response => {
      console.log(response["message"]);
      if(response["message"] == "Appointment canceled"){
        // Recargamos las preguntas
        this.msgs1 = [{severity:'success', summary:'Cita cancelada', detail:'Esperamos que todo esté bien'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Appointment not found"){
        this.msgs1 = [{severity:'info', summary:'La cita no fue encontrada 🤔', detail:'Esa cita no concuerda con ninguna de nuestras citas'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        this.msgs1 = [{severity:'info', summary:'No tienes permiso', detail:'Si quieres cancelar esta cita debes iniciar sesión dede la cuenta del psicólogo'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Appointment already finished"){
        this.msgs1 = [{severity:'info', summary:'La cita está vencida', detail:'La fecha de la cita ya pasó... Intenta con otra'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Appointment already canceled"){
        this.msgs1 = [{severity:'info', summary:'La cita ya fue cancelada', detail:'Ya cancelaste esta cita'}];
        this.mostrarNotificacion = true;
      }
    });

    this.obtenerCitas();

  }

}