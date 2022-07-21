import { Component, OnInit } from '@angular/core';
import { SafePipe } from 'src/app/safe.pipe';
import {CommonModule } from '@angular/common';
import { CoursesService } from 'src/app/services/courses.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  responsiveOptions;
  videosList: any;
  data;
  activeIndex = 0;
  currentVideo;
  videos;

  constructor(
    private _coursesService: CoursesService,
    private _sanitizer: DomSanitizer

  ) { 
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
    this._coursesService.getVideos().subscribe(response =>{
      this.videos = response;
      console.log(response);
    });

  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }


  videoPlayerInit(data){
    this.data = data;

    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));

  }

  
  nextVideo(){

    this.activeIndex++;
    
    if (this.activeIndex === this.videosList.length) 
    this.activeIndex = 0;
    
    
    this.currentVideo = this.videosList[this.activeIndex];
  }
  

  initVdo(){

    this.data.play();
  } 
  

  startPlaylistVdo(item, index: number){

    this.activeIndex = index;
    this.currentVideo = item;
  } 


  

}
