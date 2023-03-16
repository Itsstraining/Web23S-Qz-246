import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuizState } from '../../ngrx/states/quiz.state';
import { Quiz } from 'src/models/quiz.model';
import * as QuizActions from 'src/app/ngrx/actions/quiz.action';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
quizzes$ :Observable<Quiz[]>;
constructor(private store:Store<{quiz:QuizState}>) {
  this.store.dispatch(QuizActions.getQuizzes());
  this.quizzes$ = this.store.select(state => state.quiz.quizzes);
  this.quizzes$.subscribe(data => console.log(data));

}


}
