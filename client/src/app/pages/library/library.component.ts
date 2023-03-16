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
import { UserState } from 'src/app/ngrx/states/user.state';
import { User } from 'src/models/user.model';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  quizzes$: Observable<Quiz[]>;
  user$: Observable<User | null>;
  constructor(private store: Store<{
    quiz: QuizState,
    question: QuestionState,
    user: UserState
  }>,
    private router: Router) {
    this.quizzes$ = this.store.select(state => state.quiz.quizzes);
    this.quizzes$.subscribe(data => console.log(data));
    this.user$ = this.store.select(state => state.user.user);
  }
  // id = "Wh38VmUZNYXetY84nQePO5ONo0h2";
  ngOnInit(): void {
    this.user$.subscribe((user: any) => {
      if (user) {
        // console.log(user);
        // this.id = user.uid;
        this.store.dispatch(QuizActions.getQuizzesByCreateId({ createId: user.userid }));
      }
    });
  }
  startGame(quiz: Quiz) {
    this.store.dispatch(QuizActions.updateQuiz({ quiz: quiz }));
    this.store.dispatch(QuestionActions.updateQuestions({ questions: quiz.questions }));
    this.router.navigate(['/loppy']);
  }
}
