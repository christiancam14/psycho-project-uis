import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Course } from '../models/course';
import { global } from './global.service';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  public url: string = global.url;
  constructor(private _http: HttpClient,
    private cookieService: CookieService) {
    
  }

  public getCourses(urlCourses: string) {
    return this._http.get(urlCourses);
  }

  getVideos() {
    return this._http.get(this.url + 'videos');
  }

  deleteVideo(id){
    let data = {
      video_id: id,
      auth_token: this.cookieService.get('token-psycho')
    }
    return this._http.post(this.url + "videos/delete/", data).pipe(tap ((response) => {console.log(response)}));
  }

  newVideo(form){
    let data = {
      description: form.description,
	    url: form.url,
	    auth_token: this.cookieService.get('token-psycho')
    }
    console.log("servicios");
    console.log(data);
    return this._http.post(this.url + 'Videos/', data).pipe(tap ((response) => {console.log(response)}));
  }
}
