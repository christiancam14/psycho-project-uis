import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Course } from '../models/course';
import { global } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public url: string = global.url;
  constructor() {
}

  coursesList: Course  = [
    {
      img: 'assets/img/courses/angular.png',
      name: 'Inteligencia emocional',
      description: 'La inteligencia emocional es uno de los conocimientos más útiles que podrás aprender a través de cualquier taller de psicología para principiantes o para curiosos de la materia. En él aprenderás algunas herramientas básicas para afrontar mejor la vida, así como te dará pie a coger las riendas de esta clase de conocimientos para aprender más de ello y acabar gestionando tus emociones a la perfección',
      link: 'https://www.mundopsicologos.com/articulos/recomendaciones-bibliograficas-para-el-desarrollo-de-la-inteligencia-emocional'

    },
    {
      img: 'assets/img/courses/angular.png',
      name: 'Meditación',
      description: 'Está más que comprobado científicamente que la meditación tiene muchos beneficios para las personas tanto a nivel físico como emocional y mental. Pero es verdad que acercarse a ella puede ser difícil para aquellas personas que no están muy familiarizadas con la introspección. En nuestros cursos de psicología online nos acercaremos a la meditación y a algunas de las técnicas más efectivas para optar por cada una de sus propiedades curativas.',
      link: 'https://www.mundopsicologos.com/articulos/recomendaciones-bibliograficas-para-el-desarrollo-de-la-inteligencia-emocional'

    },
    {
      img: 'assets/img/courses/angular.png',
      name: 'Crisis emocionales',
      description: '¿No sabes qué hacer con tu vida? Las crisis existenciales son un proceso habitual que todos debemos pasar cuando las cosas no están yendo tal y como las deseamos. A través de un curso de psicología o nuestros talleres psicológicos podrás conocer cómo enfrentarte a ellas y aprender de este proceso. ',
      link: 'https://www.mundopsicologos.com/articulos/recomendaciones-bibliograficas-para-el-desarrollo-de-la-inteligencia-emocional'
    }
  ]

  getCourses() {
    return this.coursesList;
  }
}
