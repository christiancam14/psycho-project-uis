import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ CoursesService]
})
export class ServicesComponent implements OnInit {

  selected: Date | null;
  fecha: Date;
  date10: Date;
  valFechaMinima: Date;
  valFechaMaxima: Date;
  es: any;
  invalidDates: Array<Date>
  groupedCities: SelectItemGroup[];
  selectedCity3: string;

  constructor(
    private _coursesService: CoursesService
    ) {
      this.groupedCities = [
        {
            label: 'Mañana', value: 'am', 
            items: [
                {label: '8:00 am', value: '8:00 am'},
                {label: '9:00 am', value: '9:00 am'},
                {label: '10:00 am', value: '10:00 am'},
                {label: '11:00 am', value: '11:00 am'},
                {label: '12:00 am', value: '12:00 am'}
            ]
        },
        {
            label: 'Tarde', value: 'pm', 
            items: [
              {label: '1:00 pm', value: '1:00 pm'},
              {label: '2:00 pm', value: '2:00 pm'},
              {label: '3:00 pm', value: '3:00 pm'},
              {label: '4:00 pm', value: '4:00 pm'},
              {label: '5:00 pm', value: '5:00 pm'}
          ]
      },
    ];
   }

  ngOnInit(): void {

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
    console.log("Fechas inválidas " + this.invalidDates + " Día inválido ");
    console.log(invalidDate.getDate());
  }

 
}