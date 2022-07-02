import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Course } from '../models/course';
import { global } from './global.service';


@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  public url: string = global.url;
  constructor(private http: HttpClient) {
    
  }

  public getCourses(urlCourses: string) {
    return this.http.get(urlCourses);
  }
}
