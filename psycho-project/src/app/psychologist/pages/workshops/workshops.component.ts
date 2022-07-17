import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { WorshopsService } from 'src/app/services/worshops.service';
import { Workshop } from 'src/app/models/workshop'; 
import { Message } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  mostrarNotificacion: boolean = false;
  mostrarNotificacion2: boolean = false;
  nuevoCurso: FormGroup;
  cursosActivos: any;
  msgs1: Message[];
  msgs2: Message[];
  responsiveOptions;
  public coursesList:any;

  constructor(private _coursesService: CoursesService,
      private _workshopsService: WorshopsService,
      private fb : FormBuilder
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
    this.cargarCursos();
    this.setForm();
  }

  setForm(){
    this.nuevoCurso = this.fb.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }



  public cargarCursos() {
    this._coursesService.getCourses("http://localhost:3000/api/workshops/")
    .subscribe(response => {this.coursesList = response; this.cursosActivos = response});
  }

  public crearCurso(Form){
    let curso : Workshop = {
      title: Form.value.title, 
      image: Form.value.image, 
      body: Form.value.body
    };
    this._workshopsService.createWorkshop(curso).subscribe(response => {
      
      if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        // Enviamos a iniciar sesión
        this.msgs1 = [{severity:'error', summary:'No puedes hacer eso 😕', detail:'Por favor, inicia sesión para crear cursos para'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Workshop already exists" ){
        this.msgs1 = [{severity:'info', summary:'Este curso ya existe 😕', detail:'Prueba creando uno diferente.'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Workshop created" ){
        this.msgs1 = [{severity:'success', summary:'Curso creado 😁', detail:'El curso fue creado correctamente.'}];
        this.mostrarNotificacion = true;
      }
    });
  }


  eliminarCurso(id){
    // alert(id);
    console.log( typeof id);
    this._workshopsService.deleteWorkshop(id).subscribe(response => {

      if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        // Enviamos a iniciar sesión
        this.msgs2 = [{severity:'error', summary:'No puedes hacer eso 😕', detail:'Por favor, inicia sesión para eliminar cursos'}];
        this.mostrarNotificacion2 = true;
      }else if(response["message"] == "Workshop not found" ){
        this.msgs2 = [{severity:'info', summary:'Este curso ya no existe 😕', detail:'Prueba eliminando uno diferente.'}];
        this.mostrarNotificacion2 = true;
      }else if(response["message"] == "Workshop deleted" ){
        this.msgs2 = [{severity:'success', summary:'Curso eliminado 😁', detail:'El curso fue borrado correctamente.'}];
        this.mostrarNotificacion2 = true;
      }
      this.cargarCursos();
    });
  }
  


}
