import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { Quiz } from "src/models/quiz.model";
import * as QuestionsActions from "../actions/quiz.action";

@Injectable()
export class QuizEffects {
  constructor(private actions$: Actions, private http:HttpClient) {}
  baseURL:string = environment.baseURL+'quiz/';
  getQuizzes = createEffect(()=> this.actions$.pipe(
    ofType(QuestionsActions.getQuizzes),
    switchMap((action)=>{
      return this.http.get(`${this.baseURL}all`)
    }),
    map((reponse)=>{
      return QuestionsActions.getQuizzesSuccess({quizzes:<Array<Quiz>>reponse})
    }),
    catchError((error)=>{
      return of(QuestionsActions.getQuizzesFailure({error:error.message}));
    }),
  ));
}
