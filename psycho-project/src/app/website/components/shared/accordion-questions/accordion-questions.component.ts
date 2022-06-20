import { Component, OnInit } from '@angular/core';
import { FrequentQuestionsService } from 'src/app/services/frequent-questions.service';

@Component({
  selector: 'app-accordion-questions',
  templateUrl: './accordion-questions.component.html',
  styleUrls: ['./accordion-questions.component.css']
})
export class AccordionQuestionsComponent implements OnInit {

  public questionsList:any;

  constructor(private _frequentQuestionsService: FrequentQuestionsService) { }

  ngOnInit(): void {
    this.cargarPreguntasFrecuentes();
  }

  public cargarPreguntasFrecuentes() {
    this._frequentQuestionsService.getFrequentQuestions("https://demo2800314.mockable.io/frecuent_questions")
    .subscribe(response => {this.questionsList = response["frecuent questions"]});
  };

}
