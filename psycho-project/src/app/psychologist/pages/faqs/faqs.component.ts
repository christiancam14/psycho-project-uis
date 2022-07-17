import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { FrequentQuestionsService } from 'src/app/services/frequent-questions.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  newAnswer: FormGroup;
  questionForm: any;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;
  public questionsList: any;

  constructor(private _frequentQuestionsService: FrequentQuestionsService,
    private primengConfig: PrimeNGConfig,
    private fb: FormBuilder,
    private tokenService: TokenService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    ) { }

    ngOnInit(): void {
      this.cargarPreguntasFrecuentes();
      this.newAnswer = this.fb.group({
        question_id: ['', [Validators.required]],
        answer: ['', [Validators.required]]
    });
    this.primengConfig.ripple = true;
  }

  cargarPreguntasFrecuentes() {
    this._frequentQuestionsService.getFrequentQuestions()
    .subscribe(response => { this.questionsList = response; });
  };

  sendAnswer(form: any){
    
    this.questionForm = 
    {
      "question_id": form.value.question_id,
      "answer": form.value.answer,
      "auth_token": this.tokenService.getToken()
    }

    this._frequentQuestionsService.answerQuestion(this.questionForm).subscribe(response => {
      if(response["message"] == "Answer already exists"){
        // Recargamos las preguntas
        this.msgs1 = [{severity:'info', summary:'¡Te ganaron!', detail:'Esta pregunta ya fue respondida'}];
        this.mostrarNotificacion = true;
        this.cargarPreguntasFrecuentes();
      }else if(response["message"] == "Question not found"){
        // Enviamos a iniciar sesión
        this.msgs1 = [{severity:'info', summary:'Lo sentimos.', detail:'Ese número de ID no concuerda con ninguna de nuestras preguntas'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        this.msgs1 = [{severity:'info', summary:'¡Inicia sesión!', detail:'Inicia sesión para comenzar a responder preguntas'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Frequent question answer created"){
        this.msgs1 = [{severity:'success', summary:'Buena respuesta.', detail:'Sigue respondiendo preguntas para ayudar a más personas'}];
        this.mostrarNotificacion = true;
      }
    });

    this.cargarPreguntasFrecuentes();

  }

  cancelarCita(id){
    console.log(id);
  }

  confirm(event: Event, id) {
    console.log(id);
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Estás seguro de eliminar esta pregunta?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this._frequentQuestionsService.deleteQuestion(id).subscribe(response => {
          if(response["message"] == "Frequent question deleted"){
            this.messageService.add({
              severity: "success",
              summary: "Pregunta eliminada",
              detail: "la pregunta ha sido eliminada"
            });
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }else{
            this.messageService.add({
              severity: "error",
              summary: "Cancelada",
              detail: "La pregunta no pudo ser eliminada"
            });
          }
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Cancelada",
          detail: "La pregunta no será eliminada"
        });
      }
    });
  }



}
