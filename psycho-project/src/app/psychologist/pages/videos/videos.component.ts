import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { CoursesService } from 'src/app/services/courses.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  mostrarNotificacion: boolean = false;
  msgs1: Message[];
  responsiveOptions;
  videosList: any;
  videos;
  nuevoVideo: FormGroup;

  constructor(
    private _coursesService: CoursesService,
      private fb : FormBuilder,
      private messageService: MessageService,
      private _sanitizer: DomSanitizer,
      private primengConfig: PrimeNGConfig,
      private confirmationService: ConfirmationService,
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
    this.cargarVideos();
    this.primengConfig.ripple = true;
    this.setForm();
  }

  setForm(){
    this.nuevoVideo = this.fb.group({
      description: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }


  crearVideo(video){
    let data = {
      description: video.value.description,
	    url: video.value.url,
    }
    console.log("Componente");
    console.log(data);
    this._coursesService.newVideo(data).subscribe(response => {
      console.log(response);
      if(response["message"] == "Video created"){
        this.msgs1 = [{severity:'success', summary:'Vídeo creado', detail:'Tu vídeo podrá ser visto por los estudiantes'}];
        this.mostrarNotificacion = true;
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        this.msgs1 = [{severity:'info', summary:'¡Inicia sesión!', detail:'Inicia sesión para comenzar a responder preguntas'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Video already exists"){
        this.msgs1 = [{severity:'info', summary:'Vídeo existente', detail:'Este vídeo ya existe. Prueba con otro'}];
        this.mostrarNotificacion = true;
      }
    
    })
  }

  confirm(event: Event, id){
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Estás seguro de eliminar esta pregunta?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        console.log(typeof id);
        this._coursesService.deleteVideo(id).subscribe(response => {
          console.log(response);
          if(response["message"] == "Video deleted"){
            this.messageService.add({
              severity: "success",
              summary: "Video eliminado",
              detail: "El video ha sido eliminado"
            });
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }else{
            this.messageService.add({
              severity: "success",
              summary: "Vídeo eliminado",
              detail: "El vídeo fue eliminado satisfactoriamente"
            });
          }
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "El vídeo no será b",
          detail: "La pregunta no será eliminada"
        });
      }
    });
  }

  cargarVideos(){
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

}

