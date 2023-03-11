import { Injectable } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private questionSevice: QuestionService,

    ) { }
  quiz :Quiz= {
    quizId: "1",
    quizName: "Quiz mới",
    quizDescription: "Mô tả quiz mới",
    quizImage: "",
    creatorId: "1",
    isPublic: false,
    questions: this.questionSevice.questions,
  }

  updataQuiz(quiz:Quiz){
    this.quiz = quiz;
  }

  saveQuiz(){
    let data=this.quiz
    console.log(data)
  }

}
