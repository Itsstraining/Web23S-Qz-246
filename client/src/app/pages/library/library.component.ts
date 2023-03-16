import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuizState } from '../../ngrx/states/quiz.state';
import { Quiz } from 'src/models/quiz.model';
import * as QuizActions from 'src/app/ngrx/actions/quiz.action';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import * as QuestionActions from 'src/app/ngrx/actions/question.action';
import { Question } from 'src/models/question.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
quizzes$ :Observable<Quiz[]>;
constructor(private store:Store<{quiz:QuizState,question:QuestionState}>,
  private router:Router) {
  this.quizzes$ = this.store.select(state => state.quiz.quizzes);
  this.quizzes$.subscribe(data => console.log(data));
}
id="Wh38VmUZNYXetY84nQePO5ONo0h2";
ngOnInit(): void {
  // this.store.dispatch(QuizActions.getQuizzesByCreateId({createId:this.id}));
}
  startGame(questions:Question[]){
    this.store.dispatch(QuestionActions.updateQuestions({questions:questions}));
    this.router.navigate(['/loppy']);
  }
}
