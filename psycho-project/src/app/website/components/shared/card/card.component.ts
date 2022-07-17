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

    window.addEventListener("scroll", this.reveal);
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
    this._coursesService.getCourses("http://localhost:3000/api/workshops/")
    .subscribe(response => {this.coursesList = response});
  }

  reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if(elementTop < windowHeight - elementVisible){
        reveals[i].classList.add("active");
      }else{
        reveals[i].classList.remove("active");
      }
    }
  }
  

}
