import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Message, PrimeNGConfig } from 'primeng/api';
import { FrequentQuestionsService } from 'src/app/services/frequent-questions.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  newQuestion: FormGroup;
  questionForm: any;
  msgs1: Message[];
  mostrarNotificacion: boolean = false;
  public questionsList: any;

  constructor(private _frequentQuestionsService: FrequentQuestionsService,
    private primengConfig: PrimeNGConfig,
    private fb: FormBuilder,
    private tokenService: TokenService
    ) { }

    ngOnInit(): void {
      this.cargarPreguntasFrecuentes();
      this.newQuestion = this.fb.group({
        question: ['', [Validators.required]],
        anonymous: ['', [Validators.required]]
    });
    this.primengConfig.ripple = true;
  }

  cargarPreguntasFrecuentes() {
    this._frequentQuestionsService.getFrequentQuestions()
    .subscribe(response => { this.questionsList = response; this.questionsList = this.questionsList.reverse(); console.log(this.questionsList);});
  };

  sendQuestion(form: any){
    let anonymousQuestion;
    if(form.value.anonymous == "true"){
      anonymousQuestion = true;
    }else{
      anonymousQuestion = false;
    }

    this.questionForm = 
      {
        "question": form.value.question,
        "anonymous": anonymousQuestion,
        "auth_token": this.tokenService.getToken()
      }

    this._frequentQuestionsService.newQuestion(this.questionForm).subscribe(response => { 
      console.log(response["message"]); 
      if(response["message"] == "Frequent question created"){
        // Recargamos las preguntas
        this.msgs1 = [{severity:'success', summary:'Pregunta creada.', detail:'Tu pregunta será respondida por uno de nuestros psicólogos muy pronto'}];
        this.mostrarNotificacion = true;
        this.cargarPreguntasFrecuentes();
      }else if(response["message"] == "Failed UnauthorizedException: Unauthorized"){
        // Enviamos a iniciar sesión
        this.msgs1 = [{severity:'info', summary:'Inicia sesión:', detail:'Por favor, inicia sesión para registrar tus preguntas'}];
        this.mostrarNotificacion = true;
      }else if(response["message"] == "Frequent question already exists"){
        this.msgs1 = [{severity:'info', summary:'Buena pregunta', detail:'Esta pregunta ya fue respondida'}];
        this.mostrarNotificacion = true;
      }
    });

    this.cargarPreguntasFrecuentes();

  }
}
