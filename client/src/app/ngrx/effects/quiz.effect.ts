import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { Quiz } from "src/models/quiz.model";
import * as QuizActions from '../actions/quiz.action';

@Injectable()
export class QuizEffects {
  constructor(private actions$: Actions, private http:HttpClient) {}
  baseURL:string = environment.baseURL+'quiz';
  getQuizzes = createEffect(()=> this.actions$.pipe(
    ofType(QuizActions.getQuizzesByCreateId),
    switchMap((action)=>{
      // console.log(action);
      return this.http.get(`${this.baseURL}/${action.createId}`);
    }),
    map((reponse)=>{
      return QuizActions.getQuizzesByCreateIdSuccess({quizzes:<Array<Quiz>>reponse})
    }),
    catchError((error)=>{
      return of(QuizActions.getQuizzesByCreateIdFailure({error:error.message}));
    }),
  ));
  addNewQuiz = createEffect(()=> this.actions$.pipe(
    ofType(QuizActions.addNewQuiz),
    switchMap((action)=>{
      return this.http.post(`${this.baseURL}`,action.quiz);
    }
    ),
    map((reponse)=>{
      return QuizActions.addNewQuizSuccess({quiz:<Quiz>reponse})
    }
    ),
    catchError((error)=>{
      return of(QuizActions.addNewQuizFailure({error:error.message}));
    }
    ),
  ));
}
