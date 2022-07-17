import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any[] = [];

  public landingPageImg:any = "../../../assets/img/landing.jpg";

  constructor() { 
    window.addEventListener("scroll", this.reveal);
  }

  ngOnInit(): void {
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
