import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public landingPageImg:any = "../../../assets/img/landing.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
