import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  citasEstudiante: any;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;


  constructor(
    private _userService: UserService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(){
    this._userService.getAppointmentsStudent(this.cookieService.get('token')).subscribe(citas => {
      this.citasEstudiante = citas;
    });
  }

  @ViewChild('tablas', {static: false}) el!: ElementRef;

  descargarTabla(){
    const tabla = document.getElementById('citasEstudiante');
    const doc = new jsPDF('l', 'pt', 'b5');
    doc.html(this.el.nativeElement, {
      callback: (doc) => {
        doc.save("misCitas.pdf");
      }
    })


    // autoTable(doc, {
    //   theme: 'grid',
    //   margin: {
    //     top: 10,
    //     bottom: 10,
    //     left: 10
    //   },
    //   styles: {
    //     overflow: 'linebreak'
    //   },
    //   columnStyles:{
    //     0: {cellWidth: 30,
    //       halign: "center" 
    //     },
    //     1: {cellWidth: 'auto'},
    //     2: {cellWidth: 70},
    //     3: {cellWidth: 'auto'},
    //     4: {cellWidth: 'auto'},
    //     5: {cellWidth: 'auto'}
    //     },
    // })
    // doc.html(tabla).then(() => doc.save('prueba.pdf'));

  }

  alertaCancelacion(){
    this.msgs1 = [{severity:'info', summary:'Lo sentimos 😔 ', detail:'Para cancelar una cita, debes comunicarte con tu psicólogo'}];
    this.mostrarNotificacion = true;
  }
  



}
