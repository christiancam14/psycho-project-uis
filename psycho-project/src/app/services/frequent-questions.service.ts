import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { global } from './global.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FrequentQuestionsService {

  private url: string = global.url;
  constructor(private _http: HttpClient,
    private tokenService: TokenService
    ) {
    
  }

  getFrequentQuestions() {
    return this._http.get(this.url + 'frequent-questions');
  }

  newQuestion(newQuestion){
    console.log(newQuestion);

    return this._http.post(this.url + 'frequent-questions/', {"question": newQuestion.question,
    "anonymous": newQuestion.anonymous, "auth_token": localStorage.getItem("token")});
  }

  answerQuestion(answerQuestion){
    console.log(answerQuestion);
    return this._http.post(this.url + 'frequent-questions/give-answer', {
      "question_id": answerQuestion.question_id,
      "answer": answerQuestion.answer,
      "auth_token": this.tokenService.getToken()
    })
  }

}
