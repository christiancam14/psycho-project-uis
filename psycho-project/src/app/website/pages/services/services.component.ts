import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Message, PrimeNGConfig, SelectItemGroup} from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import { psychoDropDown } from 'src/app/models/psychoDropDown';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ CoursesService]
})
export class ServicesComponent implements OnInit {

  selected: Date | null;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;
  fecha: Date;
  date10: Date;
  hour: any;
  valFechaMinima: Date;
  psicologoSeleccionado;
  date_appointment;
  valFechaMaxima: Date;
  completo: boolean;
  psychoListado: psychoDropDown;
  psychologist_id: number;
  psychologyList;
  psychoDropDown: Array<psychoDropDown>;
  listaNombres = [] ;
  listaID = [] ;
  listaPsicologos;
  es: any;
  invalidDates: Array<Date>
  hourAppointment: SelectItemGroup[];
  selectedCity3: string;
  private storage = window.localStorage;

  constructor(
    private _coursesService: CoursesService,
    private _userService: UserService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private cookieService: CookieService
    ) {
      this.completo = true;
      this.psychoList();
      this.hourAppointment = [
        {
            label: 'Mañana', value: 'am', 
            items: [
                {label: '8:00 am', value: '8:00:00'},
                {label: '9:00 am', value: '9:00:00'},
                {label: '10:00 am', value: '10:00:00'},
                {label: '11:00 am', value: '11:00:00'},
                {label: '12:00 am', value: '12:00:00'}
            ]
        },
        {
            label: 'Tarde', value: 'pm', 
            items: [
              {label: '1:00 pm', value: '1:00:00'},
              {label: '2:00 pm', value: '2:00:00'},
              {label: '3:00 pm', value: '3:00:00'},
              {label: '4:00 pm', value: '4:00:00'},
              {label: '5:00 pm', value: '5:00:00'}
          ]
      },
    ];
   }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'},
      {severity:'info', summary:'Info', detail:'Message Content'},
      {severity:'warn', summary:'Warning', detail:'Message Content'},
      {severity:'error', summary:'Error', detail:'Message Content'}
  ];
    this.primengConfig.ripple = true;
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.valFechaMinima = new Date();
    this.valFechaMinima.setMonth(month);
    this.valFechaMinima.setFullYear(year);
    this.valFechaMaxima = new Date();
    this.valFechaMaxima.setMonth(nextMonth);
    this.valFechaMaxima.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() + 3);
    this.invalidDates = [today,invalidDate];
  }  
  
  psychoList(){
    this._userService.getPsychologist().subscribe(listado => {
      this.psychologyList = listado; 
      let psychoActive = [];
      for(let i = 0; i < this.psychologyList.length; i++) {
        console.log(this.psychologyList[i]);
        if(this.psychologyList[i].active){
          psychoActive.push(this.psychologyList[i]);
        }
      }
      
      this.psychologyList = psychoActive;
      
      for (const psycho in listado) {        
        this.listaNombres.push(listado[psycho].name);
        this.listaID.push(listado[psycho].id);
      }


      if(listado["message"] == "Appointment created"){
        // Ya existe el usuario
        this.msgs1 = [{severity:'success', summary:'Felicitaciones:', detail:'Tu cita fue asignada. A tu correo llegará la información de la cita'}];
        this.mostrarNotificacion = true;
        window.location.reload();
       }else if(listado["message"] == "This hour is not available for create an appointment"){
        this.msgs1 = [{severity:'success', summary:'Lo sentimos.', detail:'Esa hora no es válida para citas 😔'}];
        this.mostrarNotificacion = true;
       }else if(listado["message"] == "Failed UnauthorizedException: Unauthorized"){
        this.msgs1 = [{severity:'info', summary:'Por favor:', detail:'Inicia sesión.'}];
        this.mostrarNotificacion = true;
        // this.cerrarSesion();
        // window.location.reload();
       }else if(listado["message"] == "Psychologist not found"){
        this.msgs1 = [{severity:'info', summary:'Qué raro.', detail:'Al parecer, ese psicólogo no está en nuestra lista. Intenta con otro a ver'}];
        this.mostrarNotificacion = true;
       }
      


    });
  }

  cambioPsycho(evento){
    this.psychologist_id = evento.value?.id;
    let year = String(this.fecha?.getFullYear());
    let month =  String("0"+(this.fecha.getMonth()+1));
    let day =  String(this.fecha.getUTCDate());
    let date = year + "-" + month + "-" + day;
    let fullDate = date + " " +this.hour;
    this.date_appointment = fullDate;
    if(this.date_appointment && this.psychologist_id){
      this.completo = false;
    }else{
      this.completo = true;
    }
  }

  solicitarCita(){
    if(this.date_appointment && this.psychologist_id){
      let form = {
        psychologist_id : this.psychologist_id,
        date_appointment: this.date_appointment,
      }
      this._userService.setAppointment(form).subscribe(response => {
        if(response["message"] == "Appointment created"){
          // Ya existe el usuario
          this.msgs1 = [{severity:'success', summary:'Felicitaciones:', detail:'Tu cita fue asignada. A tu correo llegará la información de la cita'}];
          this.mostrarNotificacion = true;
         }else if(response["message"] == "This hour is not available for create an appointment"){
          this.msgs1 = [{severity:'success', summary:'Lo sentimos.', detail:'Esa hora no es válida para citas 😔'}];
          this.mostrarNotificacion = true;
         }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
          this.msgs1 = [{severity:'info', summary:'Por favor:', detail:'Inicia sesión.'}];
          this.mostrarNotificacion = true;
          // this.cerrarSesion();
          // window.location.reload();
         }else if(response["message"] == "Psychologist not found"){
          this.msgs1 = [{severity:'info', summary:'Qué raro.', detail:'Al parecer, ese psicólogo no está en nuestra lista. Intenta con otro a ver'}];
          this.mostrarNotificacion = true;
         }else if(response["message"] == "Psychologist not active"){
          this.msgs1 = [{severity:'error', summary:'Psicólogo incativo.', detail:'Al parecer, ese psicólogo no está activo. Intenta con otro a ver'}];
          this.mostrarNotificacion = true;
         }
      })
    }
  }

  cerrarSesion(){
    this.cookieService.delete('token');
    this.storage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
    
  }
}