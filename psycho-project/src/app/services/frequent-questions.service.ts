import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { global } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class FrequentQuestionsService {

  public url: string = global.url;
  constructor(private http: HttpClient) {
    
  }

  public getFrequentQuestions(urlCourses: string) {
    return this.http.get(urlCourses);
  }

}
