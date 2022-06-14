import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  responsiveOptions;
  public coursesList:any;

  constructor(private _coursesService: CoursesService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.cargarCursos();
  }

  public cargarCursos() {
    this._coursesService.getCourses("https://demo9850821.mockable.io/workshop/all")
    .subscribe(response => {this.coursesList = response["workshops"]});
  }
  
}
