import { Component, OnInit } from '@angular/core';
import { SafePipe } from 'src/app/safe.pipe';
import {CommonModule } from '@angular/common';

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

  constructor() { 
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

    this.videosList = [
      {
        "id": 2,
        "description": "aaaaaaaaa",
        "url": "aaaaaaaaaaa",
        "created_at": "2022-07-14T23:26:03.000Z",
        "updated_at": "2022-07-14T23:26:03.000Z"
      },
      {
        "id": 3,
        "description": "bbbbbbbbb",
        "url": "bbbbbbbbbbbb",
        "created_at": "2022-07-14T23:26:09.000Z",
        "updated_at": "2022-07-14T23:26:09.000Z"
      },
      {
        "id": 6,
        "description": "Vídeo UIS",
        "url": "https://www.youtube.com/watch?v=yXtqQU_m6GU",
        "created_at": "2022-07-16T00:30:31.000Z",
        "updated_at": "2022-07-16T00:30:31.000Z"
      }
    ]

    this.currentVideo = this.videosList[this.activeIndex];
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
