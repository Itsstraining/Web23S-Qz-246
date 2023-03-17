import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Quiz } from 'src/models/quiz.model';
import { QuizState } from '../ngrx/states/quiz.state';
import { UserState } from '../ngrx/states/user.state';
import { QuestionService } from './question.service';
import * as QuizActions from '../ngrx/actions/quiz.action';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  user$ = this.store.select((state) => state.user.user);
  constructor(
    private questionSevice: QuestionService,
    private store: Store<{
      user:UserState,
      quiz:QuizState
    }>
    ) {
      this.user$.subscribe((data)=>{
        this.quiz.creatorId = data?.userid!;
      })
    }
  quiz :Quiz= {
    quizId: "1",
    quizName: "",
    quizDescription: "",
    quizImage: "",
    creatorId: "",
    isPublic: false,
    questions: this.questionSevice.questions,
  }

  updateQuiz(quiz:Quiz){
    this.quiz = quiz;
  }

  saveQuiz(){
    let data=this.quiz
    console.log(data)
    this.store.dispatch(QuizActions.addNewQuiz({quiz:data}))
  }

}
